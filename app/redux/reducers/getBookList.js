import { GET_BOOK_LIST, GET_BOOK_LIST_SUCCEEDED, GET_BOOK_LIST_FAILED } from '../actions/actionTypes'

let initialState = {
    results: [],
    count: 32,
    next: '',
    previous: '',
    error: ''
}

const getBookList = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK_LIST:
            return state;
        case GET_BOOK_LIST_SUCCEEDED:
            return { ...action.payload, error: '' };
        case GET_BOOK_LIST_FAILED:
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default getBookList;