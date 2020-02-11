import React, {Component} from 'react';
import PropTypes from 'prop-types';
import heartImage from "../../../images/heart.png";
import cartImage from "../../../images/cart.png";
import Navigation from "./Navigation";
import CartInfo from "./CartInfo";

class Header extends Component {
    render() {
        const {user, auth} = this.props;

        return (
            <header className="header">
                <div className="header_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-3 col-3 order-1">
                                <div className="logo_container">
                                    <div className="logo"><a href="#">Webshop.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="main_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="main_nav_content d-flex flex-row">
                                    <div className="main_nav_menu ml-auto">
                                        <Navigation user={user} auth={auth}/>
                                    </div>

                                    <div className="menu_trigger_container ml-auto">
                                        <div
                                            className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                            <div className="menu_burger">
                                                <div className="menu_trigger_text">menu</div>
                                                <div className="cat_burger menu_burger_inner">
                                                    <span></span><span></span><span></span></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    user: PropTypes.object
};

export default Header;