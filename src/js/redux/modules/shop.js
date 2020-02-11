const types = {
    GET_PRODUCTS: "shop/GET_PRODUCTS",
    GET_PRODUCTS_SUCCESS: "shop/GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAILURE: "shop/GET_PRODUCTS_FAILURE",
    ADD_PRODUCT: "shop/ADD_PRODUCT",
    ADD_PRODUCT_SUCCESS: "shop/ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_FAILURE: "shop/ADD_PRODUCT_FAILURE",
    ERROR_FETCHING: "shop/ERROR_FETCHING",
    ADD_TO_CART:"shop/ADD_TO_CART",
    ADD_TO_WISH_LIST:"shop/ADD_TO_WISH_LIST",
    ORDER: "shop/ORDER",
    ORDER_SUCCESS: "shop/ORDER_SUCCESS",
    ORDER_FAILURE: "shop/ORDER_FAILURE",
    APPLY_COUPON: 'shop/APPLY_COUPON'
};

const actions = {
    getProducts: (searchObj) => ({type: types.GET_PRODUCTS, payload: {...searchObj}}),
    getProductsSuccess: (products) => ({type: types.GET_PRODUCTS_SUCCESS, payload: products}),
    getProductsFailure: (error) => ({type: types.GET_PRODUCTS_FAILURE, error: error}),
    addProduct: () => ({type: types.ADD_PRODUCT}),
    addProductSuccess: (product) => ({type: types.ADD_PRODUCT_SUCCESS, payload: product}),
    addProductFailure: (error) => ({type: types.ADD_PRODUCT_FAILURE, error: error}),
    addToCart: (product) => ({type:types.ADD_TO_CART, payload:product}),
    addToWishList: (product) => ({type:types.ADD_TO_WISH_LIST, payload:product}),
    order: () => ({type: types.ORDER}),
    orderSuccess: (product) => ({type: types.ORDER_SUCCESS, payload: product}),
    orderFailure: (error) => ({type: types.ORDER_FAILURE, error: error}),
    applyCoupon: (coupon) => ({type: types.APPLY_COUPON, payload: coupon})
};

const initialState = () => (
    {
        categories: [
            {id:0, name:"---"},
            {id:1, name:"Computers & Laptops"},
            {id:2, name:"Cameras & Photos"},
            {id:3, name:"Hardware"},
            {id:4, name:"Smartphones & Tablets"},
            {id:5, name:"TV & Audio"},
            {id:6, name:"Gadgets"},
            {id:7, name:"Car Electronics"},
            {id:8, name:"Video Games & Consoles"},
            {id:9, name:"Accessories"}
        ],
        coupons: [
            {id: 'COUPON10', amount: 10},
            {id: 'COUPON20', amount: 20},
            {id: 'COUPON50', amount: 50}
        ],
        query: "",
        category: null,
        list: [],
        loading: false,
        error: null,
        cart:[],
        coupon: null,
        wishList:[]
    }
);

const shop = (state = initialState(), action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                loading: true,
                query: (action.payload && action.payload.query? action.payload.query : ""),
                category: (action.payload && action.payload.category? action.payload.category : null),
                error:null
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                list: [],
                loading: false,
                error: action.error
            };
        case types.ADD_PRODUCT:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case types.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.ERROR_FETCHING:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case types.ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            };
        case types.ADD_TO_WISH_LIST:
            return {
                ...state,
                wishList: [
                    ...state.wishList,
                    action.payload
                ]
            };
        case types.ORDER:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.ORDER_SUCCESS:
            return {
                ...state,
                cart: [],
                coupon: null,
                loading: false
            };
        case types.ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case types.APPLY_COUPON:
            return {
                ...state,
                coupon: action.payload
            };

        default:
            return state;
    }
};

export {
    actions as shopActions
}

export default shop;
