import {
  ADD_APPLY,
  ADD_FAVORITE,
  ADD_JOBS,
  DELETE_JOBS,
  REMOVE_FAVORITE,
} from "./actionsType";

export const addJobs = (dispatch, jobs) => {
  dispatch({ type: ADD_JOBS, payload: jobs });
};
export const deleteJobs = (dispatch, id) => {
  dispatch({ type: DELETE_JOBS, payload: id });
};

export const addFavorite = (dispatch, favJob) => {
  dispatch({ type: ADD_FAVORITE, payload: favJob });
};
export const removeFavorite = (dispatch, id) => {
  dispatch({ type: REMOVE_FAVORITE, payload: id });
};

export const addApply = (dispatch, applyJob) => {
  dispatch({ type: ADD_APPLY, payload: applyJob });
};
export const deleteApply = (dispatch, id) => {
  dispatch({ type: ADD_APPLY, payload: id });
};
