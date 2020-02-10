import React, {Component} from 'react';

class Product extends Component {

    render() {
        const {product, addToCart} = this.props;
        const discount = product.discount && product.discount > 0;


        return (
            <div key={product.id} className={"product_item" + (product.newProduct ? " is_new" : "")}>
                <div className="product_border"/>
                <div
                    className="product_image d-flex flex-column align-items-center justify-content-center">
                    <img src={`https://colorlib.com/preview/theme/onetech/images/${product.img}`} alt=""/>
                </div>
                <div className="product_content">
                    <div className="product_price">
                        {!!product.discount &&
                            <div>
                                {product.price - (product.price * product.discount / 100)} HRK
                                <span>{product.price} HRK</span>
                            </div>
                        }
                        {!product.discount &&
                            <div>{product.price} HRK</div>
                        }
                    </div>
                    <div className="product_name">
                        <h4 className={'text-muted'}>
                            {product.name}
                            {addToCart &&
                                <i className="fas fa-shopping-cart" onClick={() => addToCart(product)}></i>
                            }
                        </h4>
                    </div>
                </div>
                <ul className="product_marks">
                    {!!discount &&
                        <li className="product_mark product_discount"
                            style={{
                                visibility: "visible",
                                display: "inline-block",
                                opacity: 1
                            }}>{product.discount}%</li>
                    }
                    {product.newProduct && !discount &&
                        <li className="product_mark product_new">new</li>
                    }
                </ul>
            </div>

        );
    }
}

Product.propTypes = {};

export default Product;