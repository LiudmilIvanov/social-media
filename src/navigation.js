import { Route, Switch, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import LoginPage from './pages/login/login'


const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation