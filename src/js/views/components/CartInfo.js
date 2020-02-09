import React from 'react';
import cartImage from "../../../images/cart.png";
import {connect} from "react-redux";
import heartImage from "../../../images/heart.png";

function mapStateToProps(state) {
    return {
        cart: state.shop.cart,
        wishList: state.shop.wishList
    };
}

class CartInfo extends React.Component {
    render() {
        const {cart, wishList} = this.props;

        const sum = cart.map(e => e.price).reduce((a, b) => a + b, 0);

        return (
            <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                <div
                    className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon">
                        <img src={heartImage} alt=""/>
                    </div>
                    <div className="wishlist_content">
                        <div className="wishlist_text"><a href="#">Wishlist</a></div>
                        <div className="wishlist_count">{wishList ? wishList.length:'No wishes'}</div>
                    </div>
                </div>
                <div className="cart">
                    <div
                        className="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div className="cart_icon">
                            <img src={cartImage} alt=""/>
                            <div className="cart_count">
                                <span>{cart ? cart.length : 0}</span>
                            </div>
                        </div>
                        <div className="cart_content">
                            <div className="cart_text"><a href="#">Cart</a></div>
                            <div className="cart_price">${sum}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(CartInfo);