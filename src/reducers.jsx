import {
  GET_ALL_EMPLOYEE,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  CLEAR_EMPLOYEE,
} from "./action";

function reducer(state, action) {
  if (action.type === ADD_EMPLOYEE) {
    console.log(action.payload);
  }
  return state;
}

export default reducer;
