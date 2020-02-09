const types = {
    FETCH_ITEMS: "module2/FETCH_ITEMS",
    SET_ITEMS: "module2/SET_ITEMS",
    REMOVE_ITEM_BY_ID: "module2/REMOVE_ITEM_BY_ID",
    UPDATE_ITEM: "module2/UPDATE_ITEM",
    ADD_ITEM: "module2/ADD_ITEM"
};

const actions = {
    fetchItems: () => ({type: types.FETCH_ITEMS}),
    setItems: (items) => ({type: types.SET_ITEMS, payload: items}),
    removeItem: (itemId) => ({type: types.REMOVE_ITEM_BY_INDEX, payload: itemId}),
    updateItem: (item) => ({type: types.UPDATE_ITEM, payload: item}),
    addItem: (item) => ({type: types.ADD_ITEM, payload: item})
};

const initialState = () => (
    {
        items: [],
        loading: false,
        error: null
    }
);

const module2 = (state = initialState(), action) => {
    switch (action.type) {
        case types.FETCH_ITEMS:
            return {
                ...state,
                error: null,
                loading: true
            };
        case types.SET_ITEMS:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case types.ADD_ITEM:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload]
            };
        case types.REMOVE_ITEM_BY_ID: {
            const idx = state.items.map(e => e.id).indexOf(action.payload);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, idx),
                    ...state.items.slice(idx + 1)
                ]
            }
        }
        case types.UPDATE_ITEM: {
            const itemId = action.payload.id;
            const idx = state.items.map(e => e.id).indexOf(itemId);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, idx),
                    action.payload,
                    ...state.items.slice(idx + 1)
                ]
            }
        }
        default:
            return state;
    }
};

export {
    actions as module2Actions
}

export default module2;
