import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "components/Home";
import Login from "components/Login";
import Register from "components/Register";
import Admin from "components/Admin";
import Menu from "components/Menu/Menu";
import MenuItemCreate from "components/MenuItemCreate";


const AppRoutes = () => {

    const route_config = [
        { path: "/", component: Home, exact:true },
        { path: "/login", component: Login, exact:true },
        { path: "/register", component: Register, exact:true },
        { path: "/admin", component: Admin, exact:true },
        { path: "/menu", component: Menu, exact:true },
        { path: "/menu/create", component: MenuItemCreate, exact:true },
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