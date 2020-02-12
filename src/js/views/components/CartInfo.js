import React from 'react';
import cartImage from "../../../images/cart.png";
import CartItem from "./CartItem";
import FormGroup from "reactstrap/lib/FormGroup";
import {Button, Form, Input, InputGroup, InputGroupAddon, Label} from "reactstrap";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class CartInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coupon: ''
        }
    }

    handleCouponChange = (e) => {
        this.setState({coupon: e.target.value})
    };

    handleApplyCoupon = () => {
        const {coupons, applyCoupon} = this.props;
        const c = coupons.find(c => c.id === this.state.coupon);
        if (!c) {
            this.setState({couponExists: false});
        } else {
            applyCoupon(this.state.coupon);
        }
    };

    handleOrder = () => {
        const {order, cart, coupon} = this.props;
        order({productDtos: cart, coupon: coupon});
    };

    render() {
        const {cart, coupon, coupons} = this.props;

        let sum = cart.map(e => !!e.discount ? (e.price - ((e.discount * e.price) / 100)) : e.price).reduce((a, b) => a + b, 0);
        let couponAmount = 0;
        if (!!coupon) {
            couponAmount = coupons.find(c => c.id === coupon).amount * sum / 100;
            sum = sum - couponAmount;
        }

        const CartItemNew = ({item}) => (
            <div
                className={"border-top pt-3 d-flex flex-row align-items-start justify-content-between mt-2 "}>
                <span className={"cart_item_name"}>{item.name}</span>
                <span className={"cart_item_price"}>{item.price} HRK</span>
            </div>
        );

        const basketNotEmpty = (cart && cart.length > 0);

        return (
            <div className={"p-2"}>
                <div className={"d-flex flex-column align-items-stretch justify-content-start"}>

                    <div className="mb-3 cart_container d-flex flex-row align-items-center justify-content-center">
                        <div className="cart_icon">
                            <img src={cartImage} alt=""/>

                            <div className="cart_count">
                                <span>{basketNotEmpty ? cart.length : 0}</span>
                            </div>

                        </div>
                        <div className="cart_content">
                            <div className="cart_text">
                                Košarica {basketNotEmpty ? "":" je prazna"}
                            </div>
                        </div>
                    </div>

                    {cart.map((item, idx) =>
                        <CartItemNew item={item} key={idx}/>
                    )}

                    {!!coupon &&
                    <div
                        className={"border-top pt-3 d-flex flex-row align-items-start justify-content-between mt-2 "}>
                        <span className={"cart_item_name  text-danger"}>{coupon}</span>
                        <span className={"cart_item_name text-danger"}>-{couponAmount} HRK</span>
                    </div>
                    }

                    {basketNotEmpty &&
                    <div
                        className={"border-top pt-3 d-flex flex-row align-items-start justify-content-between mt-2 "}>
                        <strong className={"cart_item_name"}>UKUPNO</strong>
                        <strong className={"cart_item_name"}>{sum} HRK</strong>
                    </div>
                    }

                    {basketNotEmpty && !coupon &&
                    <div className={"d-flex flex-column mt-5 p-2 bg-light align-items-end justify-content-between"}>
                        <Input placeholder={'Kupon'} onChange={this.handleCouponChange}/>
                        <a className={"btn btn-link text-info"} onClick={this.handleApplyCoupon}>Primjeni kupon</a>
                    </div>
                    }

                </div>

                {basketNotEmpty &&
                <div className={"form-group mt-3"}>
                    <button className={"btn btn-warning btn-block"} onClick={this.handleOrder}>Plati {sum} HRK </button>
                </div>
                }
            </div>
        )
    }
}

export default CartInfo;