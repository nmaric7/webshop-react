import React from 'react';
import cartImage from "../../../images/cart.png";
import CartItem from "./CartItem";
import FormGroup from "reactstrap/lib/FormGroup";
import {Button, Form, Input, Label} from "reactstrap";
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
        }
        else {
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

        return (
            <div>
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
                                <div className="cart_text">Košarica</div>
                            </div>
                        </div>
                    </div>
                </div>
                {cart.map((item, idx) =>
                    <CartItem key={idx} item={item} />
                )}

                {cart && cart.length > 0 && !coupon &&
                    <Row>
                        <Col xs={8}>
                            <FormGroup>
                                <Input placeholder={'Kupon'} onChange={this.handleCouponChange}/>
                            </FormGroup>
                        </Col>
                        <Col xs={4}>
                            <FormGroup>
                                <Button onClick={this.handleApplyCoupon}>Primjeni</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                }
                {!!coupon &&
                    <Row>
                        <Col xs={6}>{coupon}</Col>
                        <Col className={'text-right cart_price'} xs={6}><span>-{couponAmount} HRK</span></Col>
                    </Row>
                }

                <Row>
                    <Col xs={12} className={'text-right'}>{sum} HRK</Col>
                </Row>

                {cart && cart.length > 0 &&
                    <Button onClick={this.handleOrder}>Naruči</Button>
                }
            </div>
        )
    }
}

export default CartInfo;