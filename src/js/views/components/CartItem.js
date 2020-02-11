import React, {Component} from 'react';
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class CartItem extends Component {

    render() {
        const {item} = this.props;

        return (
            <div>
                <Row>
                    <Col xs={12} className={'cart_item_name'}>{item.name}</Col>
                    <Col xs={12} className={'text-right cart_item_price'}>
                        {!!item.discount ? (item.price - (item.price * item.discount / 100)) : item.price} HRK</Col>
                </Row>
            </div>

        );
    }
}

CartItem.propTypes = {};

export default CartItem;