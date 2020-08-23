import actionTypes from "../actionTypes/actionTypes";


const initialState = {
  taskList: null,
  isFetching: false,
  errorMessage: null,
}


const mainReducer = (state = initialState,  action) => {
  switch (action.type) {
    case actionTypes.SET_TASK_LIST: {
      return {
        ...state,
        taskList: action.payload.data
      }
    }
    case actionTypes.SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload.value
      }
    }
    case actionTypes.ERROR: {
      return {
        ...state,
        errorMessage: action.payload.message,
      }
    }
    default:
      return state;
  }
}


export default mainReducer;
