import React, {Component} from 'react';
import {connect} from 'react-redux';
import {currentUser} from '../../redux/services/dashboard.services';
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";
import {addToCart, getProducts, applyCoupon, order} from "../../redux/services/shop.services";
import CartInfo from "../components/CartInfo";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import {Alert} from "reactstrap";

class DashboardPage extends Component {

    componentDidMount() {
        const {currentUser, products, getProducts} = this.props;
        currentUser();
        if (!products || products.length === 0) {
            getProducts({});
        }
    }

    render() {
        const {products, addToCart, cart, coupon, coupons, applyCoupon, order, orderSuccessMsg, getProducts} = this.props;
        return (
            <div className={'container'}>
                <div className={'alert alert-info'} style={{margin: '1rem'}}>
                    <span style={{cursor: 'pointer'}} onClick={getProducts}>Osvježi</span>
                </div>

                <Row>
                    <Col xs={8}>
                        <ProductList products={products} addToCart={addToCart}/>
                    </Col>
                    <Col xs={4} className={""}>
                        <div className={"card mt-5"}>
                            {orderSuccessMsg &&
                                <Alert color="success">
                                    {orderSuccessMsg}
                                </Alert>
                            }
                            <CartInfo cart={cart} coupon={coupon} coupons={coupons}
                                      applyCoupon={applyCoupon} order={order} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.dashboard.user,
        auth: state.auth,
        products: state.shop.list,
        cart: state.shop.cart,
        coupon: state.shop.coupon,
        coupons: state.shop.coupons,
        orderSuccessMsg: state.shop.orderSuccessMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        currentUser: () => dispatch(currentUser()),
        getProducts: (searchObj) => dispatch(getProducts(searchObj)),
        addToCart: (product) => dispatch(addToCart(product)),
        applyCoupon: (coupon) => dispatch(applyCoupon(coupon)),
        order: (request) => dispatch(order(request))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);