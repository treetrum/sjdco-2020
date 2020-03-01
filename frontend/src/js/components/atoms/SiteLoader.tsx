import * as React from "react";
import { CSSTransition } from "react-transition-group";

interface Props {
    active: boolean;
}

const SiteLoader: React.FC<Props> = props => {
    return (
        <CSSTransition in={props.active} timeout={1200} classNames="loading">
            <div className="loader loading-enter">
                <div className="loader-1" />
                <div className="loader-2" />
                <div className="loader-3" />
                <div className="loader-4" />
            </div>
        </CSSTransition>
    );
};

export default SiteLoader;
