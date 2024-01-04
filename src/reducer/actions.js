import {
  ADD_APPLY,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  UPDATE_JOB,
} from "./actionsType";

export const addFavorite = (dispatch, favJob) => {
  dispatch({ type: ADD_FAVORITE, payload: favJob });
};
export const removeFavorite = (dispatch, id) => {
  dispatch({ type: REMOVE_FAVORITE, payload: id });
};

export const addApply = (dispatch, applyJob) => {
  dispatch({ type: ADD_APPLY, payload: applyJob });
};

export const addUpdate = (dispatch, job) => {
  dispatch({ type: UPDATE_JOB, payload: job });
};
