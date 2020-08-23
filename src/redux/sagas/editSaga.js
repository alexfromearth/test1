import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "../actionTypes/actionTypes";


function* editTaskWorker(action) {

}


export default function* editTaskWatcher() {
  yield takeEvery(actionTypes.EDIT_TASK, editTaskWorker);
}
