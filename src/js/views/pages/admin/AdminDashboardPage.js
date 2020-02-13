import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../../components/Navigation';
import {getProducts} from '../../../redux/services/shop.services';
import {Link} from "react-router-dom";
import ProductList from "../../components/ProductList";
import {Alert} from "reactstrap";
import Col from "reactstrap/lib/Col";

class AdminDashboardPage extends Component {

    render() {
        const {products, getProducts} = this.props;
        return (
            <div className={'container'}>
                <div className={'alert alert-info'} style={{margin: '1rem'}}>
                    <Link to={'/admin/addProduct'} style={{margin: '1rem'}}>
                        <span style={{ cursor: 'pointer'}} >
                            + Dodaj novi proizvod
                        </span>
                    </Link>
                    <span style={{cursor: 'pointer', margin: '1rem'}} onClick={getProducts}>Osvježi</span>
                </div>

                <ProductList products={products} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.dashboard.user,
        auth: state.auth,
        products: state.shop.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (searchObj) => dispatch(getProducts(searchObj))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminDashboardPage);