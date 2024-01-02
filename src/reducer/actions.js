import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actionsType";

export const addFavorite = (dispatch, favJob) => {
  dispatch({ type: ADD_FAVORITE, payload: favJob });
};
export const removeFavorite = (dispatch, id) => {
  dispatch({ type: REMOVE_FAVORITE, payload: id });
};
