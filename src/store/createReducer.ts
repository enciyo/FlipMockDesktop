import {AppState, initialState} from "./model/AppState";
import {PayloadAction} from "@reduxjs/toolkit";
import Types from "./model/Types";

export default function createReducer(state: AppState = initialState, action: PayloadAction<any>) {
    switch (action.type) {
        case Types.ADD: {
            return {
                ...state,
                mocks: [...state.mocks, action.payload]
            }
        }
        case Types.DELETE: {
            return {
                ...state,
                mocks: state.mocks.filter(i => i.uniqueId !== action.payload.uniqueId),
                selectedItem: action.payload.isShow ? null : state.selectedItem
            }
        }
        case Types.ADD_ALL: {
            return {
                ...state,
                mocks: state.mocks.concat(action.payload)
            }
        }
        case Types.CLEAR: {
            return {
                ...state,
                mocks: []
            }
        }
        case Types.EDIT: {
            return state
        }
        case Types.SELECT: {
            let item = state.mocks.map(item => {
                if (item.uniqueId === action.payload.uniqueId) {
                    item.isShow = !action.payload.isShow
                } else {
                    item.isShow = false
                }
                return item
            })

            return {
                ...state,
                selectedItem: action.payload.isShow ? action.payload : null,
                mocks: item
            }
        }
        case Types.SHOW_MODAL: {
            return {
                ...state,
                isVisibleModal: action.payload
            }
        }
        case Types.UPDATE: {
            let item = state.mocks.map(item => {
                if (item.uniqueId === action.payload.uniqueId) {
                    return action.payload
                }
                return item
            })
            return {
                ...state,
                mocks: item
            }
        }
        default:
            return state
    }
}

