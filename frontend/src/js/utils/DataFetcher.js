import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import PropTypes from "prop-types";

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousLocation: null,
            currentLocation: this.props.location,
            initialLoading: true,
            error: null,
        };
    }

    static getDerivedStateFromProps(props, state) {
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

    fetchComponentData(initial) {
        const found = matchRoutes(
            this.props.routes,
            this.props.location.pathname
        );
        const promises = found
            .map(({ route, match }) => {
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
        console.log(promises);
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

DataFetcher.propTypes = {
    routes: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
    location: PropTypes.any,
    onLoadingStateChange: PropTypes.func,
    passToPreload: PropTypes.any,
    initialPreload: PropTypes.func,
};

DataFetcher.defaultProps = {
    location: {},
    passToPreload: {},
    onLoadingStateChange: () => {},
    initialPreload: () => Promise.resolve(),
};

// wrap in withRouter
export default withRouter(DataFetcher);
