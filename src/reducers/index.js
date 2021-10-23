import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import MountainPageReducer from "./MountainPageReducer";

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    MountainPageReducer,
  });

export default reducers;
