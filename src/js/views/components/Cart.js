import React from 'react';
import cartImage from "../../../images/cart.png";
import {NavLink} from "react-router-dom";

function mapStateToProps(state) {
    return {
        cart: state.shop.cart
    };
}

class Cart extends React.Component {
    render() {
        const {cart} = this.props;
        const sum = cart.map(e => e.price).reduce((a, b) => a + b, 0);

        return (
            <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">

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
                            <div className="cart_text"><NavLink to={'/cart'}>Cart</NavLink></div>
                            <div className="cart_price">{sum} HRK</div>
                        </div>
                    </div>
                </div>

                <div>
                    {cart.map((c, idx) =>
                        <div key={idx}>{c.name} - {c.price} HRK</div>
                    )}

                </div>
            </div>
        )
    }
}

export default Cart;