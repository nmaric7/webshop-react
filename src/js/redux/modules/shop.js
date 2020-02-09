const types = {
    FETCH_PRODUCTS: "shop/FETCH_PRODUCTS",
    SET_PRODUCTS: "shop/SET_PRODUCTS",
    ERROR_FETCHING: "shop/ERROR_FETCHING",
    ADD_TO_CART:"shop/ADD_TO_CART",
    ADD_TO_WISH_LIST:"shop/ADD_TO_WISH_LIST"
};

const actions = {
    fetchProducts: (searchObj) => ({type: types.FETCH_PRODUCTS, payload: {...searchObj}}),
    setProducts: (products) => ({type: types.SET_PRODUCTS, payload: products}),
    errorFetching: (error) => ({type: types.ERROR_FETCHING, error: error}),
    addToCart: (product) => ({type:types.ADD_TO_CART, payload:product}),
    addToWishList: (product) => ({type:types.ADD_TO_WISH_LIST, payload:product}),
};

const initialState = () => (
    {
        categories: [
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
        query: "",
        category: null,
        list: [],
        loading: false,
        error: null,
        cart:[],
        wishList:[]
    }
);

const shop = (state = initialState(), action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                loading: true,
                query: (action.payload && action.payload.query? action.payload.query : ""),
                category: (action.payload && action.payload.category? action.payload.category : null),
                error:null
            };
        case types.SET_PRODUCTS:
            return {
                ...state,
                list: action.payload,
                loading: false
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

        default:
            return state;
    }
};

export {
    actions as shopActions
}

export default shop;
