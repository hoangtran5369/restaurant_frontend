import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "components/Home";
import Login from "components/Login";
import Register from "components/Register";
import Admin from "components/Admin";
import CheckOut from "components/CheckOut/CheckOut";
import Promotions from "components/Promotions";
import Menu from "components/Menu/Menu";
import MenuItemCreate from "components/MenuItemCreate";
import Reservation from "components/Reservation/Reservation";



const AppRoutes = () => {

    const route_config = [
        { path: "/", component: Home, exact:true },
        { path: "/login", component: Login, exact:true },
        { path: "/register", component: Register, exact:true },
        { path: "/admin", component: Admin, exact:true },
        { path: "/checkout", component: CheckOut, exact:true },
        { path: "/menu", component: Menu, exact:true },
        { path: "/menu/create", component: MenuItemCreate, exact:true },
        {path: "/reservation", component: Reservation, exact:true },
        {path: "/Promotions", component: Promotions, exact:true },

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