const types = {
    SET_TEST_DATA:"module1/SET_TEST_DATA",
    DELETE_TEST_DATA:"module1/DELETE_TEST_DATA"
};

const actions = {
    setData: (data) => ({type:types.SET_TEST_DATA, payload: data}),
    deleteData: () => ({type:types.DELETE_TEST_DATA})
};

const initialState = () => (
    {
        data:null
    }
);

const module1 = (state = initialState(), action) => {
    switch (action.type) {
        case types.SET_TEST_DATA:
            return {
                ...state,
                data: action.payload
            };
        case types.DELETE_TEST_DATA:
            return{
                ...state,
                data:null
            };
        default:
            return state;
    }
};

export {
    actions as module1Actions
}

export default module1;
