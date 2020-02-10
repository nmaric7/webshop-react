import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
import Cart from '../components/Cart';
import Button from 'reactstrap/lib/Button';
import {order} from "../../redux/services/shop.services";

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        user: state.dashboard.user,
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        order: (cart) => dispatch(order(cart))
    };
};

class CartPage extends Component {

    handleOrder = () => {
      const {cart, order} = this.props;
      order(cart);
    };

    render() {

        const {cart, user, auth} = this.props;

        return (
            <div className={'container'}>
                <Navigation user={user} auth={auth}/>
                <Cart cart={cart} />
                <Button onClick={this.handleOrder}>Naruči</Button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);