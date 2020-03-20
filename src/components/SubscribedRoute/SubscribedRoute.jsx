import React from "react";

import { Route, Redirect } from "react-router-dom";

import flags from "../../flags";

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
    if (localStorage.getItem(flags.subscribed) !== "true") { return <Redirect to="/" /> }
    
    const render = props => <Component {...props} {...rest}/>;

    return <Route path={path} render={render} />
};

export default ProtectedRoute;

