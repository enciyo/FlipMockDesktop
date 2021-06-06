import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import "./createReducer";

var uniqid = require("uniqid");


const initialMock = {
    uniqueId: uniqid(),
    endpoint: "",
    dummyJsonData: "",
    isShow: false
}
const initialState = {
    mocks: [],
    isShowModal: false,
    selectedItem: null
};

export {
    initialMock,
    initialState
}
