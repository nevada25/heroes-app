import {Redirect, Route} from "react-router-dom";
import Protypes from 'prop-types';

export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
    localStorage.setItem('lastPath', rest.location.pathname)
    return (
        <Route {...rest}
               component={(props) => (
                   (isAuthenticated)
                       ? (<Component {...props} />)
                       : (<Redirect to="/login"/>)
               )}/>
    );
}
PrivateRoute.propTypes = {
    isAuthenticated: Protypes.bool.isRequired,
    component: Protypes.func.isRequired,
}
