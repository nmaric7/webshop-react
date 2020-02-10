import React, {Component} from 'react';
import {connect} from 'react-redux';
import {currentUser} from '../../redux/services/dashboard.services';
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";
import {addToCart, getProducts} from "../../redux/services/shop.services";
import CartInfo from "../components/CartInfo";

class DashboardPage extends Component {

    componentDidMount() {
        const {currentUser, products, getProducts} = this.props;
        currentUser();
        if (!products || products.length === 0) {
            getProducts({});
        }
    }

    render() {
        const {user, auth, products, addToCart, cart} = this.props;
        return (
            <div className={'container'}>
                <Navigation user={user} auth={auth}/>
                <ProductList products={products} addToCart={addToCart}/>
                <CartInfo cart={cart}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.dashboard.user,
        auth: state.auth,
        products: state.shop.list,
        cart: state.shop.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        currentUser: () => dispatch(currentUser()),
        getProducts: (searchObj) => dispatch(getProducts(searchObj)),
        addToCart: (product) => dispatch(addToCart(product))

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);