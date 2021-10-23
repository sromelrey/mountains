import { mountains_list } from "constants/ListOfMountains";
import * as ActionTypes from "constants/actionTypes";

export function GetMountainPageDetailsBySlug(slug) {
  return (dispatch) => {
    const mountain_details = mountains_list.filter(
      (mountain) => mountain.slug === slug
    );
    dispatch({
      type: ActionTypes.GET_MOUNTAIN_DETAILS_BY_SLUG,
      payload: { mountain_details: mountain_details[0] },
    });
  };
}

export function FilterMountainByTitle(title) {
  return (dispatch) => {
    const filtered_mountains = mountains_list.filter(
      (mountain) => mountain.title.search(title) !== -1 && mountain
    );
    dispatch({
      type: ActionTypes.FILTER_MOUNTAINS_BY_TITLE,
      payload: { filtered_mountains },
    });
  };
}

export function SortMountains(sortType) {
  return (dispatch) => {
    let sorted_mountains;
    if (sortType === "ascending") {
      sorted_mountains = mountains_list.sort((a, b) => a.id - b.id);
    } else {
      sorted_mountains = mountains_list.sort((a, b) => b.id - a.id);
    }
    dispatch({
      type: ActionTypes.SORT_MOUNTAINS,
      payload: { sorted_mountains },
    });
  };
}
