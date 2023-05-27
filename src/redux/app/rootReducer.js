import { combineReducers } from "@reduxjs/toolkit";
import { sliceName } from "./SliceName";
import adminSlice from "../features/admin-login/slice/adminSlice";

const combinedReducer = combineReducers({
  [sliceName.admin_login]: adminSlice
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
