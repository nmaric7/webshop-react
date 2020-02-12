import {shopActions} from './../modules/shop';
import {serverCall} from './common.services';

const products = [
    {
        id: 1,
        isNew: true,
        name: "Philips BT6900A",
        discount: null,
        price: 225,
        img: "https://colorlib.com/preview/theme/onetech/images/new_5.jpg"
    },
    {
        id: 2,
        isNew: false,
        name: "Sony BT6900A",
        discount: null,
        price: 1225,
        img: "https://colorlib.com/preview/theme/onetech/images/new_2.jpg"
    },
    {
        id: 3,
        isNew: false,
        name: "Amazon BT6900A",
        discount: 10,
        price: 25,
        img: "https://colorlib.com/preview/theme/onetech/images/new_3.jpg"
    },
    {
        id: 4,
        isNew: true,
        name: "Philips BT6900A",
        discount: 20,
        price: 225,
        img: "https://colorlib.com/preview/theme/onetech/images/new_5.jpg"
    },
    {
        id: 5,
        isNew: false,
        name: "Sony BT6900A",
        discount: null,
        price: 1825,
        img: "https://colorlib.com/preview/theme/onetech/images/new_2.jpg"
    },
    {
        id: 6,
        isNew: false,
        name: "Philips BT6900A",
        discount: null,
        price: 2125,
        img: "https://colorlib.com/preview/theme/onetech/images/new_3.jpg"
    },
    {
        id: 7,
        isNew: false,
        name: "Kenyo BT6900A",
        discount: null,
        price: 720,
        img: "https://colorlib.com/preview/theme/onetech/images/new_5.jpg"
    },
    {
        id: 8,
        isNew: false,
        name: "Sony BT6900A",
        discount: null,
        price: 1223,
        img: "https://colorlib.com/preview/theme/onetech/images/new_2.jpg"
    },
    {
        id: 9,
        isNew: false,
        name: "Philips BT6900A",
        discount: 50,
        price: 225,
        img: "https://colorlib.com/preview/theme/onetech/images/new_3.jpg"
    }
];

const getProducts = (searchObj) => dispatch => {
    dispatch(shopActions.getProducts(searchObj));
    return serverCall({
        method: 'POST',
        url: '/products/all'
    })
        .then(res => {
            dispatch(shopActions.getProductsSuccess(res.data));
        })
        .catch(error => {
            dispatch(shopActions.getProductsFailure(error));
        })
};

const addProduct = (product) => dispatch => {
    dispatch(shopActions.addProduct());
    return serverCall({
        method: 'POST',
        url: '/admin/add',
        data: product
    })
        .then(res => {
            dispatch(shopActions.addProductSuccess(res.data));
        })
        .catch(error => {
            dispatch(shopActions.addProductFailure(error));
        })
};

const addToWishList = (item) => {
    return function (dispatch) {
        dispatch(shopActions.addToWishList(item));
    }
};

const addToCart = (item) => {
    return function (dispatch) {
        dispatch(shopActions.addToCart(item));
    }
};

const order = (request) => dispatch => {
    dispatch(shopActions.order());
    return serverCall({
        method: 'POST',
        url: '/orders/saveorder',
        data: request
    })
        .then(res => {
            dispatch(shopActions.orderSuccess(res.data));
        })
        .catch(error => {
            dispatch(shopActions.orderFailure(error));
        })
};

const applyCoupon = (coupon) => dispatch => {
    dispatch(shopActions.applyCoupon(coupon));
};

const getOrders = () => dispatch => {
    dispatch(shopActions.getOrders());
    return serverCall({
        method: 'GET',
        url: '/orders/getorders'
    })
        .then(res => {
            dispatch(shopActions.getOrdersSuccess(res.data));
        })
        .catch(error => {
            dispatch(shopActions.getOrdersFailure(error));
        })
};

export {
    getProducts,
    addProduct,
    addToCart,
    order,
    applyCoupon,
    getOrders
}