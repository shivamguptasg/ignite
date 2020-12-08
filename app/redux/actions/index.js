import { GET_BOOK_LIST } from './actionTypes'

export const getBookList = (params) => {
    return {
        type: GET_BOOK_LIST,
        params
    }
}