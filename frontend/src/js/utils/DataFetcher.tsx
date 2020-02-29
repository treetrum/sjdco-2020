import * as React from "react";
import { withRouter, Route, RouteComponentProps } from "react-router-dom";
import { matchRoutes } from "react-router-config";

interface PropsType extends RouteComponentProps {
    routes: any;
    children: React.ReactChild;
    passToPreload: any;
    initialPreload: () => Promise<any>;
    onLoadingStateChange: (data: {
        loading: boolean;
        initial?: boolean | undefined;
        error?: any | undefined;
    }) => void;
}

interface StateType {
    previousLocation: any;
    currentLocation: any;
    initialLoading: boolean;
    error: any;
}

class DataFetcher extends React.Component<PropsType, StateType> {
    static defaultProps = {
        onLoadingStateChange: () => {},
        initialPreload: () => Promise.resolve(),
    };

    constructor(props: PropsType) {
        super(props);
        this.state = {
            previousLocation: null,
            currentLocation: this.props.location,
            initialLoading: true,
            error: null,
        };
    }

    static getDerivedStateFromProps(props: PropsType, state: StateType) {
        const currentLocation = props.location;
        const previousLocation = state.currentLocation;
        const navigated = currentLocation !== previousLocation;
        if (navigated) {
            // save the location so we can render the old screen
            return {
                previousLocation,
                currentLocation,
            };
        }
        return null;
    }

    componentDidMount() {
        this.props.onLoadingStateChange({ loading: true, initial: true });
        Promise.all([
            this.fetchComponentData(true),
            this.props.initialPreload(),
        ]).then(() => {
            this.setState({ initialLoading: false });
            this.props.onLoadingStateChange({ loading: false });
        });
    }

    componentDidUpdate(prevProps) {
        const navigated = prevProps.location !== this.props.location;
        if (navigated) {
            this.fetchComponentData();
        }
    }

    fetchComponentData(initial: boolean = false) {
        const found = matchRoutes(
            this.props.routes,
            this.props.location.pathname
        );
        const promises = found
            .map(({ route, match }: any) => {
                if (route.component.preload) {
                    return route.component.preload({
                        match,
                        location: this.props.location,
                        passed: this.props.passToPreload,
                    });
                }
                return null;
            })
            .filter(a => !!a);
        if (promises.length === 0) {
            this.setState({ previousLocation: null });
            return Promise.resolve();
        }
        if (!initial) {
            this.props.onLoadingStateChange({ loading: true });
        }
        return Promise.all(promises)
            .then(() => {
                this.setState({ previousLocation: null });
                if (!initial) {
                    this.props.onLoadingStateChange({ loading: false });
                }
            })
            .catch(error => {
                this.setState({ error });
                this.props.onLoadingStateChange({
                    loading: false,
                    error,
                });
            });
    }

    render() {
        const { children, location } = this.props;
        const { previousLocation } = this.state;

        if (this.state.initialLoading || this.state.error) {
            return null;
        }

        // use a controlled <Route> to trick all descendants into
        // rendering the old location
        return (
            <Route
                location={previousLocation || location}
                render={() => children}
            />
        );
    }
}

// wrap in withRouter
export default withRouter(DataFetcher);
