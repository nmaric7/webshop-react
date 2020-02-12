import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../../../redux/services/shop.services';
import AddProduct from "../../components/AddProduct";
import {Redirect} from "react-router-dom";

class AddProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {added: false};
    }

    handleAddProduct = (product) => {
        const {onAddProduct} = this.props;
        this.setState({added: true}, () => onAddProduct(product));
    };

    render() {
        const {categories} = this.props;
        const {added} = this.state;

        if (added) {
            return <Redirect
                to={{
                    pathname: "/admin/dashboard",
                    state: { from: this.props.location }
                }}/>;
        }
        return (
            <div className={'container'}>
                <AddProduct categories={categories} onAddProduct={this.handleAddProduct}/>
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