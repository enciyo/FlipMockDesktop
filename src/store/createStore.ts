import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import createReducer from "./createReducer";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";

const middleware = [ thunk ]
middleware.push(createLogger())


export const appStore = createStore(
    createReducer, applyMiddleware(...middleware)
)


