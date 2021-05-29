import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import Admin from "./Admin"
import MenuItemCreate from "./MenuItemCreate"

const AppRoutes = () => {

    const route_config = [
        { path: "/", component: Home, exact:true },
        { path: "/login", component: Login, exact:true },
        { path: "/register", component: Register, exact:true },
        { path: "/admin", component: Admin, exact:true },
        { path: "/menu/create", component: MenuItemCreate, exact:true }
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