import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../../components/Navigation';
import {addProduct} from '../../../redux/services/shop.services';
import AddProduct from "../../components/AddProduct";

class AddProductPage extends Component {

    render() {
        const {categories, onAddProduct} = this.props;
        return (
            <div className={'container'}>
                <AddProduct categories={categories} onAddProduct={onAddProduct}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.dashboard.user,
        auth: state.auth,
        products: state.shop.list,
        categories: state.shop.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddProduct: (product) => dispatch(addProduct(product))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductPage);