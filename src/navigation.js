import { Route, Switch, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import LoginPage from './pages/login/login'
import LogoutPage from "./pages/logout/logout"
import RegisterPage from "./pages/register/register"


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/logout" component={LogoutPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation