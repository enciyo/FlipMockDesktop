import React, {createContext, useReducer} from 'react';

const initialState = {
    mocks: [],
    isShowModal: false
};


export const FlipMockContext = createContext();

export const FlipMockContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <FlipMockContext.Provider value={[state,dispatch]}>
            {props.children}
        </FlipMockContext.Provider>
    );
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return state
        case "Delete":
            return state
        case "AddAll":
            return state
        case "Edit":
            return state
        case "Select":
            return state
        case "Show":
            return state
        default:
            return state
    }
};