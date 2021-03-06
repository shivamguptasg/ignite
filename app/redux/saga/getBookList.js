import { put, takeLatest } from 'redux-saga/effects'
import {
    SHOW_LOADER,
    HIDE_LOADER,

    GET_BOOK_LIST,
    GET_BOOK_LIST_SUCCEEDED,
    GET_BOOK_LIST_FAILED,
} from '../actions/actionTypes'

import { EndPoint } from '../../constants/apiEndPoints'
import { Api } from "./api";

function* getBookList(params) {
    console.log('getBookList saga param==>', params.params)
    try {
        let getBookListParams = {
            method: "GET",
            url: `${EndPoint.getBookList}?page=${params.params.page}&type=${params.params.title}`
        };
        yield put({ type: SHOW_LOADER });
        const bookList = yield Api.apiCall(getBookListParams);
        yield put({ type: HIDE_LOADER });
        console.log('bookList==>', bookList)

        if (bookList.status !== "error") {
            yield put({ type: GET_BOOK_LIST_SUCCEEDED, payload: bookList })
        } else {
            alert('Error while fetching Books.')
            yield put({ type: GET_BOOK_LIST_FAILED, error: bookList.message })
        }

    }
    catch (error) {
        yield put({ type: HIDE_LOADER });
        alert('Something went wrong. Please check your connection')
        yield put({ type: GET_BOOK_LIST_FAILED, error: 'Something went wrong. Please check your connection' })
    }
}

export function* watchBookList() {
    yield takeLatest(GET_BOOK_LIST, getBookList); //always fetch latest list
}