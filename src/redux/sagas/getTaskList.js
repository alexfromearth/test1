import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "../actionTypes/actionTypes";
import API from "../../api";
import {setError, setIsFetching, setTaskList} from "../actionCreators/actionCreators";

function* getTaskListWorker(action) {
    yield put(setIsFetching(true));
    try {
        const data = yield call(API.getTasks);
        yield put(setTaskList(data));
        yield put(setIsFetching(false));
    } catch(error) {
        yield put(setError(error));
    }
}


export default function* getTaskListWatcher() {
    yield takeEvery(actionTypes.GET_LIST, getTaskListWorker);
}
