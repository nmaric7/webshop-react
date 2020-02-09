const types = {
    LOGIN: 'auth/LOGIN',
    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
    SIGNUP: 'auth/SIGNUP',
    SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS',
    SIGNUP_FAILURE: 'auth/SIGNUP_FAILURE',
    LOGOUT: 'LOGOUT'
};

const actions = {
    login: () => ({type: types.LOGIN}),
    loginSuccess: (user) => ({type: types.LOGIN_SUCCESS, payload: user}),
    loginFailure: (error) => ({type: types.LOGIN_FAILURE, error: error}),
    signup: () => ({type: types.SIGNUP}),
    signupSuccess: (user) => ({type: types.SIGNUP_SUCCESS, payload: user}),
    signupFailure: (error) => ({type: types.SIGNUP_FAILURE, error: error}),
    logout: () => ({type: types.LOGOUT})
};

const initialState = () => ({
    loading: false,
    authenticated: false,
    registered: false
});

const auth = (state = initialState(), action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                loading: true,
                error: null,
                authenticated: false
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                authenticated: true
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                authenticated: false
            };
        case types.SIGNUP:
            return {
                ...state,
                loading: true,
                error: null,
                registered: false
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                registered: true
            };
        case types.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                registered: false
            };
        case types.LOGOUT:
            return {
                authenticated: false
            };
        default:
            return state;
    }
};

export {
    actions as authActions
}

export default auth;