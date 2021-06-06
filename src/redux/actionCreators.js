import {types} from "./actionTypes";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectedMock, showModal} from "./createReducer";

let client = null


const addMock = createAsyncThunk("mock/addMock",
    async (mock) => {
        client.send(types.ADD, mock)
        return mock
    }
)

const deleteMock = createAsyncThunk("mock/deleteMock",
    async (mock) => {
        client.send(types.DELETE, mock)
        return mock
    }
)

const updateMock = createAsyncThunk("mock/updateMock",
    async (mock) => {
        client.send(types.UPDATE, mock)
        return mock
    }
)

const addAllMocks = createAsyncThunk("mock/addAll",
    async (mocks) => {
        client.send(types.ADD_ALL, mocks)
        return mocks
    }
)

const selectMock = (mock) => {
    return selectedMock(mock)
}

const hideSelectMock = () => {
    return selectedMock({
        uniqueId: -1
    })
}

const updateModalVisibility = (isVisible) => {
    return showModal(isVisible)
}

export {
    addMock,
    deleteMock,
    updateMock,
    addAllMocks,
    selectMock,
    hideSelectMock,
    updateModalVisibility,
    client
}