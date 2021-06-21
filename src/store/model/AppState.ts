import {initialMock, Mock} from "./Mock";
import {Config, initialConfig} from "./Config";

interface AppState {
    mocks: Mock[],
    isVisibleModal: boolean,
    selectedItem: Mock,
    config:Config,
    mock: Mock
}

const initialState: AppState = {
    mocks: [],
    isVisibleModal: false,
    selectedItem: null,
    config:initialConfig(),
    mock: initialMock()
}

export {
    AppState,
    initialState
}