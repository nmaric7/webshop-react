import {serverCall} from './common.services';
import {authActions} from '../modules/auth';
import {shopActions} from '../modules/shop';

const login = (request) => dispatch => {
    dispatch(authActions.login());
    dispatch(shopActions.initCart());
    return serverCall({
        method: 'POST',
        url: '/auth/login',
        data: request
    })
        .then(res => {
            localStorage.setItem('auth', JSON.stringify(res.data));
            dispatch(authActions.loginSuccess(res.data));
        })
        .catch(error => {
            dispatch(authActions.loginFailure(error.response.data));
        })
};

const logout = () => dispatch => {
    dispatch(authActions.logout());
    localStorage.removeItem('auth');
};

const signup = (request) => dispatch => {
    dispatch(authActions.signup());
    return serverCall({
        method: 'POST',
        url: '/auth/register',
        data: request
    })
        .then(res => {
            dispatch(authActions.signupSuccess(res.data));
        })
        .catch(error => {
            dispatch(authActions.signupFailure(error.response.data));
        })
};

export {
    login,
    logout,
    signup
}