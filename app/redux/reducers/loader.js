import { SHOW_LOADER, HIDE_LOADER } from '../actions/actionTypes';

const initialState = {
    showLoader: false,
};

const loader = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, showLoader: true };
        case HIDE_LOADER:
            return { ...state, showLoader: false };
        default:
            return state; //state does not change
    }
};

export default loader;