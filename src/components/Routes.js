import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";


const AppRoutes = () => {

    const route_config = [
        { path: "/", component: Home, exact:true },
        { path: "/login", component: Login, exact:true }
    ]


    return (
        <Router>
            <Switch>
                {route_config.map(route => <Route exact={route.exact} path={route.path} component={route.component} />)}
            </Switch>
        </Router>
    )
}

export default AppRoutes