import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../../components/Navigation';
import {getProducts} from '../../../redux/services/shop.services';
import {Link} from "react-router-dom";
import ProductList from "../../components/ProductList";
import {Alert} from "reactstrap";

class AdminDashboardPage extends Component {

    render() {
        const {products} = this.props;
        return (
            <div className={'container'}>
                <Link to={'/admin/addProduct'}>
                    <Alert color="info">
                        + Dodaj novi proizvod
                    </Alert>

                </Link>
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