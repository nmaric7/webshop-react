import React, {Component} from 'react';
import PropTypes from 'prop-types';
import heartImage from "../../../images/heart.png";
import cartImage from "../../../images/cart.png";
import Navigation from "./Navigation";
import CartInfo from "./CartInfo";

class Header extends Component {
    render() {
        const {user} = this.props;

        return (
            <header className="header">
                <div className="header_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-3 col-3 order-1">
                                <div className="logo_container">
                                    <div className="logo"><a href="#">Nique</a></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                <div className="header_search">
                                    <div className="header_search_content">
                                        <div className="header_search_form_container">
                                            <form action="#" className="header_search_form clearfix">
                                                <input type="search" required="required"
                                                       className="header_search_input"
                                                       placeholder="Search for products..."/>
                                                <div className="custom_dropdown">
                                                    <div className="custom_dropdown_list">
                                                        <span className="custom_dropdown_placeholder clc">All Categories</span>
                                                        <i className="fas fa-chevron-down"/>
                                                        <ul className="custom_list clc">
                                                            <li><a className="clc" href="#">All Categories</a>
                                                            </li>
                                                            <li><a className="clc" href="#">Computers</a></li>
                                                            <li><a className="clc" href="#">Laptops</a></li>
                                                            <li><a className="clc" href="#">Cameras</a></li>
                                                            <li><a className="clc" href="#">Hardware</a></li>
                                                            <li><a className="clc" href="#">Smartphones</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                        className="header_search_button trans_300"
                                                        value="Submit">
                                                    <img src="images/search.png" alt=""></img>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                                    <CartInfo/>
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
                                        <Navigation user={user}/>
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