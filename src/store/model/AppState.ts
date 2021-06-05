import {initialMock, Mock} from "./Mock";

interface AppState {
    mocks: Mock[],
    isVisibleModal: boolean,
    selectedItem: Mock
}

const initialState: AppState = {
    mocks: [],
    isVisibleModal: false,
    selectedItem: null
}

export {
    AppState,
    initialState
}