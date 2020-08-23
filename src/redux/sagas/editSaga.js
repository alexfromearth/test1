import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "../actionTypes/actionTypes";
import {getListSC, setError, setIsFetching} from "../actionCreators/actionCreators";
import API from "../../api";


function* editTaskWorker(action) {
  yield put(setIsFetching(true));
  try {
    const data = yield call(API.editTaks, action.payload.id, action.payload.title);
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


export default function* editTaskWatcher() {
  yield takeEvery(actionTypes.EDIT_TASK, editTaskWorker);
}
