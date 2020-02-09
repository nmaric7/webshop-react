import React from 'react';
import {createStore, applyMiddleware, combineReducers} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//modules
import module1 from "./modules/module1";
import module2 from "./modules/module2";
import shop from "./modules/shop";
import dashboard from './modules/dashboard';
import auth from "./modules/auth";

const combinedReducers = combineReducers(
    {
        module1,
        module2,
        shop,
        dashboard,
        auth
    });
let store = createStore(combinedReducers, applyMiddleware(logger, thunk));

export default store;

