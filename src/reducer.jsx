import { combineReducers } from "redux";

function countReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREASE':
        return state + 1;
      case 'DECREASE':
        return state - 1;
      default:
        return state;
    }
  }

export default combineReducers({
    count: countReducer,
})