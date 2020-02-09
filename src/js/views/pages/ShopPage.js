import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts, addToCart, addToWishList} from './../../redux/services/shop.services';

function mapStateToProps(state) {
    return {
        cart: state.shop.cart,
        wishList: state.shop.wishList,
        products: state.shop.list,
        loading: state.shop.loading,
        error: state.shop.error,
        category: state.shop.category,
        query: state.shop.query,
        categories: state.shop.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: (searchObj) => {
            dispatch(fetchProducts(searchObj));
        },
        addToWishList: (product) => {
            dispatch(addToWishList(product));
        },
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    };
}

class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            category: null
        }
    }

    componentDidMount() {
        const {query, category} = this.state;
        this.fetchProducts(query, category);
    }

    fetchProducts(q, c) {
        this.props.fetchProducts(q, c);
    }

    selectCategory(c) {
        this.setState({category: c, query: ""});
        this.fetchProducts(this.state.query, c);
    }

    addToCart(item) {
        const {cart, addToCart} = this.props;
        const itemIdx = cart.map(p => p.id).indexOf(item.id);
        if (itemIdx < 0) {
            addToCart(item);
        }
    }

    addToWishList(item) {
        const {wishList, addToWishList} = this.props;
        const itemIdx = wishList.map(p => p.id).indexOf(item.id);
        if (itemIdx < 0) {
            addToWishList(item);
        }
    }

    render() {

        const {category, query} = this.state;
        const {loading, products, error, categories} = this.props;

        return (
            <div className={"shop"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-lg-3"}>
                            <div className="shop_sidebar">
                                <div className="sidebar_section">
                                    <div className="sidebar_title">Categories</div>
                                    <ul className="sidebar_categories">
                                        {categories && categories.map((c, cIdx) => (
                                            <li key={c.id}>
                                                <a onClick={(event) => this.selectCategory(c)}>{c.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-9"}>

                            <div className={"shop-content"}>
                                <div className={"shop_bar clearfix"}>

                                </div>
                                {loading &&
                                <p>
                                    <br/>
                                    Please wait...
                                </p>
                                }

                                {!loading && error &&
                                <p>Error fetching products!</p>
                                }

                                {!loading && !error &&
                                <div className={"product_grid flex-wrap d-flex"}>
                                    {products && products.map(p => (
                                        <div key={p.id} className={"product_item" + (p.isNew ? " is_new" : "")}>
                                            <div className="product_border"/>
                                            <div
                                                className="product_image d-flex flex-column align-items-center justify-content-center">
                                                <img src={p.img} alt=""/>
                                            </div>
                                            <div className="product_content">
                                                <div className="product_price">
                                                    ${p.price}
                                                    {p.discount &&
                                                    <span>${p.price - (p.price * p.discount / 100)}</span>
                                                    }
                                                </div>
                                                <div className="product_name">
                                                    <div>
                                                        <a href="#" tabIndex="0"
                                                           onClick={() => this.addToCart(p)}>{p.name}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product_fav" onClick={() => this.addToWishList(p)}>
                                                <i className="fas fa-heart"/>
                                            </div>
                                            <ul className="product_marks">
                                                {p.discount &&
                                                <li className="product_mark product_discount"
                                                    style={{
                                                        visibility: "visible",
                                                        display: "inline-block",
                                                        opacity: 1
                                                    }}>{p.discount}%</li>
                                                }
                                                {p.isNew && !p.discount &&
                                                <li className="product_mark product_new">new</li>
                                                }
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage);