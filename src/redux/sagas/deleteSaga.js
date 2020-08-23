import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "../actionTypes/actionTypes";
import {getListSC, setError, setIsFetching} from "../actionCreators/actionCreators";
import API from "../../api";


function* deleteTaskWorker(action) {
  yield put(setIsFetching(true));
  try {
    const data = yield call(API.deleteTask, action.payload.id);
    yield put(setIsFetching(false));
    if (data.success) {
      yield put(getListSC());
    } else {
      yield put(setError(data.error));
    }
  } catch(error) {
    yield put(setError(error));
  }
}


export default function* deleteTaskWatcher() {
  yield takeEvery(actionTypes.DELETE_TASK, deleteTaskWorker);
}
