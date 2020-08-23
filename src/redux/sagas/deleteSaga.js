import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "../actionTypes/actionTypes";


function* deleteTaskWorker(action) {

}


export default function* deleteTaskWatcher() {
  yield takeEvery(actionTypes.DELETE_TASK, deleteTaskWorker);
}
