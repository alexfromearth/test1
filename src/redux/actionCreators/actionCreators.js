import actionTypes from "../actionTypes/actionTypes";

export const setTaskList = (data) => ({type: actionTypes.SET_TASK_LIST, payload: {data}})
export const setIsFetching = (value) => ({type: actionTypes.SET_IS_FETCHING, payload: {value}});
export const fetchingSuccess = () => ({type: actionTypes.FETCHING_SUCCESS});
export const setError = (message) => ({type: actionTypes.ERROR, payload: {message}});

//saga
export const getListSC = () => ({type: actionTypes.GET_LIST});
export const deleteTaskSC = (id) => ({type: actionTypes.DELETE_TASK, payload: {id}});
export const editTaskSC = (id, title) => ({type: actionTypes.EDIT_TASK, payload: {id, title}});
export const createTaskSC = (title) => ({type: actionTypes.CREATE_TASK, payload: {title}});

