import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../../components/Navigation';
import {getProducts} from '../../../redux/services/shop.services';
import {Link} from "react-router-dom";
import ProductList from "../../components/ProductList";

class AdminDashboardPage extends Component {

    render() {
        const {user, auth, products} = this.props;
        return (
            <div className={'container'}>
                <h3>Admin Dashboard</h3>
                <Navigation user={user} auth={auth}/>

                <Link to={'/admin/addProduct'}>
                    Add new product
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