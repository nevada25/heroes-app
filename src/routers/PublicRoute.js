import {Redirect, Route} from "react-router-dom";
import Protypes from 'prop-types';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest}
               component={(props) => (
                   (!isAuthenticated)
                       ? (<Component {...props} />)
                       : (<Redirect to="/"/>)
               )}/>
    );
}
PublicRoute.propTypes = {
    isAuthenticated: Protypes.bool.isRequired,
    component: Protypes.func.isRequired,
}
