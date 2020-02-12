import React, {Component} from 'react';
import {Alert} from "reactstrap";
import Order from "./Order";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/lib/Row";

class OrderList extends Component {
    render() {
        const {orders} = this.props;

        if (!orders || orders.length == 0) {
            return (<Alert color={'warning'}>
                Nema narudžbi!
            </Alert>)
        }
        return (
            <div>
                <Row style={{padding: '10px', marginTop: '30px'}} className={'font-weight-bold'}>
                    <Col xs={2}>Broj narudžbe</Col>
                    <Col xs={3}>Datum narudžbe</Col>
                    <Col xs={4}>Korisnik</Col>
                    <Col xs={3} className={'text-right'}>Cijena</Col>
                </Row>
                {orders && orders.map((o, idx) => (
                    <Order key={idx} order={o}/>
                ))}
            </div>
        );
    }
}

OrderList.propTypes = {
};

export default OrderList;