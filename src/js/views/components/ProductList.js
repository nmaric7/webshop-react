import React, {Component} from 'react';
import Product from "./Product";

class ProductList extends Component {
    render() {
        const {products, addToCart} = this.props;

        if (!products || products.length == 0) {
            return (<div>No products</div>)
        }
        return (
            <div className={"product_grid flex-wrap d-flex"}>
                {products && products.map((p, idx) => (
                    <Product product={p} key={idx} addToCart={addToCart} />
                ))}
            </div>
        );
    }
}

ProductList.propTypes = {
};

export default ProductList;