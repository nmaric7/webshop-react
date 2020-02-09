import axios from 'axios';
import {shopActions} from './../modules/shop';

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

const fetchProducts = (searchObj) => {
    return function (dispatch) {
        dispatch(shopActions.fetchProducts(searchObj));

        //mocked
        setTimeout(function () {
            dispatch(shopActions.setProducts(products));
        }, 2000);

        // axios.get("http://index.hr")
        //     .then( result =>{
        //        //call some redux module action
        //       dispatch(shopActions.setProducts(products));
        //
        //     })
        //     .catch(error=>{
        //         //call some redux module action for error handle
        //         //TODO nmaric remove mocked data set
        //         console.error("ERROR fetching products from server!");
        //         dispatch(shopActions.setProducts(products));
        //     });
    }
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


export {
    fetchProducts,
    addToCart,
    addToWishList
}