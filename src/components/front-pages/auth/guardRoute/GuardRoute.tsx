
import React from 'react';
import { Route, Redirect } from "react-router-dom";

type state = {
    component : any,
    guard : boolean | undefined |null,
    path?  :string
}

const GuardRoute = ({component, guard, ...rest}: state) => {
    const routeComponent = (props: any) => (
        guard
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );

    return <Route {...rest} render={routeComponent}/>;
};

export default GuardRoute
