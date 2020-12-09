import { GET_BOOK_LIST, GET_SEARCH_BOOK_LIST } from './actionTypes'

export const getBookList = (params) => {
    return {
        type: GET_BOOK_LIST,
        params
    }
}

export const getSearchBookList = (params) => {
    return {
        type: GET_SEARCH_BOOK_LIST,
        params
    }
}