import { GET_BOOK_LIST, GET_BOOK_LIST_SUCCEEDED, GET_BOOK_LIST_FAILED } from '../actions/actionTypes'

let initialState = {
    bookList: [],
    error: ''
}

const getBookList = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK_LIST:
            return state;
        case GET_BOOK_LIST_SUCCEEDED:
            return { bookList: action.bookList, error: '' };
        case GET_BOOK_LIST_FAILED:
            return { bookList: [], error: action.error };
        default:
            return state;
    }
};

export default getBookList;