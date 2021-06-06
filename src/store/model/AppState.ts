import {initialMock, Mock} from "./Mock";

interface AppState {
    mocks: Mock[],
    isVisibleModal: boolean,
    selectedItem: Mock,
    mock: Mock
}

const initialState: AppState = {
    mocks: [],
    isVisibleModal: false,
    selectedItem: null,
    mock: initialMock()
}

export {
    AppState,
    initialState
}