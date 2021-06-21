import {AppState, initialState} from "../store/model/AppState";
import {Mock} from "../store/model/Mock";
import {Config} from "../store/model/Config";

class LocalDataSource {
    static readonly LOCAL_STORAGE_MOCKS = "LOCAL_STORAGE_MOCKS"
    static readonly LOCAL_STORAGE_MOCKS_CONFIG = "LOCAL_STORAGE_MOCKS_CONFIG"

    static saveCurrentState(currentState: AppState) {
        localStorage.setItem(LocalDataSource.LOCAL_STORAGE_MOCKS, JSON.stringify(currentState.mocks))
        localStorage.setItem(LocalDataSource.LOCAL_STORAGE_MOCKS_CONFIG, JSON.stringify(currentState.config))
        console.log("Saved state: => " + JSON.stringify(currentState))
    }

    static getCurrentState(): AppState {
        let state = initialState
        try {
            let mocks = JSON.parse(localStorage.getItem(LocalDataSource.LOCAL_STORAGE_MOCKS) || "") as [Mock]
            let config = JSON.parse(localStorage.getItem(LocalDataSource.LOCAL_STORAGE_MOCKS_CONFIG) || "") as Config
            state.mocks = mocks
            state.config = config
        }catch (e) {
            console.log("getCurrentState: " + e)
        }
        return state
    }
}

export default LocalDataSource
