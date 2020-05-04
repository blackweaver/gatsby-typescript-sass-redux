import { combineReducers } from 'redux';
import { TOGGLE_DARKMODE, ADD_ITEM, REMOVE_ITEM } from "./actions"

const initialState = {
    isDarkMode: false,
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARKMODE:
            return { ...state, isDarkMode: action.isDarkMode };
        case ADD_ITEM:
            return { ...state, counter: action.counter };
        case REMOVE_ITEM:
            return { ...state, counter: action.counter };
        default:
        return state;
    }
};

export default combineReducers({ reducer }); 