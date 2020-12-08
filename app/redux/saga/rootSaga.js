import { call, all, fork } from "redux-saga/effects";
import { watchBookList } from './getBookList'

export default function* rootSaga() {
    yield all([
        fork(watchBookList)
    ])
}