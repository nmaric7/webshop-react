import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getOrders} from './../../redux/services/shop.services';
import OrderList from "../components/OrderList";
import Button from "reactstrap/lib/Button";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class OrdersPage extends Component {

    componentDidMount() {
        const {getOrders} = this.props;
        getOrders();
    }

    handleRefresh = () => {
        const {getOrders} = this.props;
        getOrders();
    };

    render() {
        const {orders} = this.props;
        return (
            <div className={'container'}>
                <Row>
                    <Col xs={12} className={'text-right'} style={{margin: '10px'}}>
                        <Button color={'info'} onClick={this.handleRefresh}>Osvježi</Button>
                    </Col>
                </Row>
                <OrderList orders={orders} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        orders: state.shop.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => {
            dispatch(getOrders());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersPage);