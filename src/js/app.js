import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/style.scss';

import './../styles/css/blog_responsive.css';
import './../styles/css/blog_single_responsive.css';
import './../styles/css/blog_single_styles.css';
import './../styles/css/blog_styles.css';
import './../styles/css/cart_responsive.css';
import './../styles/css/cart_styles.css';
import './../styles/css/contact_responsive.css';
import './../styles/css/contact_styles.css';
import './../styles/css/main_styles.css';
import './../styles/css/product_responsive.css';
import './../styles/css/product_styles.css';
import './../styles/css/regular_responsive.css';
import './../styles/css/regular_styles.css';
import './../styles/css/responsive.css';
import './../styles/css/shop_responsive.css';
import './../styles/css/shop_styles.css';

import './../plugins/fontawesome-free-5.0.1/css/fontawesome-all.css';


//import Header from "./views/components/Header";
import Template from "./views/components/Template";
import HomePage from "./views/pages/HomePage";
import ShopPage from "./views/pages/ShopPage";
import SomePage2 from "./views/pages/SomePage2";

import DashboardPage from './views/pages/DashboardPage'
import LoginPage from "./views/pages/LoginPage";
import SignupPage from "./views/pages/SignupPage";
import LogoutPage from "./views/pages/LogoutPage";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/signup">
                    <SignupPage/>
                </Route>
                <Route exact path="/logout">
                    <LogoutPage/>
                </Route>
                <Route exact path="/">
                    <DashboardPage/>
                </Route>
                <Route path="/some2">
                    <SomePage2/>
                </Route>
                <Route path="/some">
                    <ShopPage/>
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("app")
);


