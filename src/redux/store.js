import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./reducers/MainReducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import createSagaMiddleware from 'redux-saga'
import {all} from "redux-saga/effects";
import editTaskWatcher from "./sagas/editSaga";
import createTaskWatcher from "./sagas/CreateSaga";
import deleteTaskWatcher from "./sagas/deleteSaga";
import getTaskListWatcher from "./sagas/getTaskList";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  main: mainReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(
  function* () {
    yield all([
      editTaskWatcher(),
      createTaskWatcher(),
      deleteTaskWatcher(),
      getTaskListWatcher(),
    ])
  }
);

export default store;
