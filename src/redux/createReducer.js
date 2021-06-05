import {initialState} from "./createStore";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import * as actions from "./actionCreators";
import thunk from "redux-thunk";

const mockSlice = createSlice({
    name: "mock",
    initialState,
    reducers: {
        selectedMock: (state, action) => {
            state.mocks = state.mocks.map(item => {
                item.isShow = item.uniqueId === action.payload.uniqueId
                return item
            })
        },
        showModal: (state, action) => {
            state.isShowModal = action.payload
        },
        clear: (state, action) => {
            state.mocks = []
        }
    },
    extraReducers: {
        [actions.addMock.fulfilled]: (state, action) => {
            state.mocks = [...state.mocks, action.payload]
        },
        [actions.deleteMock.fulfilled]: (state, action) => {
            state.mocks = state.mocks.filter((mock) => action.payload.uniqueId !== mock.uniqueId)
        },
        [actions.addAllMocks.fulfilled]: (state, action) => {
            state.mocks = state.mocks.concat(action.payload.mocks)
        },
        [actions.updateMock.fulfilled]: (state, action) => {
            let index = state.mocks.findIndex(e => e.uniqueId === action.payload.uniqueId)
            state.mocks[index] = action.payload
        },

    }
})


const isShowModal = (state) => state.isShowModal
const mocks = (state) => state.mocks
const selected = (state) => state.selectedItem



const appStore = configureStore({
    reducer: mockSlice.reducer,
    middleware: [thunk]
})

export {
    appStore,
    mockSlice,
    selected,
    isShowModal,
    mocks
}

export const {
    selectedMock,
    showModal,
    clear
} = mockSlice.actions;
