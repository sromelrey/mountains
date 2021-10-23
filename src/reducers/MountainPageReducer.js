import * as ActionTypes from "../constants/actionTypes";
import { mountains_list } from "constants/ListOfMountains";

const initialState = {
  error: null,
  mountain_details: null,
  mountains_list,
  filtered_mountains: [],
  sorted_mountains: [],
};

export default function MountainPageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_MOUNTAIN_DETAILS_BY_SLUG:
      return {
        ...state,
        mountain_details: payload.mountain_details,
      };
    case ActionTypes.FILTER_MOUNTAINS_BY_TITLE:
      return {
        ...state,
        filtered_mountains: payload.filtered_mountains,
      };
    case ActionTypes.SORT_MOUNTAINS:
      return {
        ...state,
        sorted_mountains: payload.sorted_mountains,
      };
    default:
      return state;
  }
}
