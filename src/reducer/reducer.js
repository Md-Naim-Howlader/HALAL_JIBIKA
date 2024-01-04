import { ADD_APPLY, ADD_FAVORITE, REMOVE_FAVORITE } from "./actionsType";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favJobs: [...state.favJobs, payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favJobs: [...state.favJobs].filter((job) => job.id !== payload),
      };

    case ADD_APPLY:
      return {
        ...state,
        applyedJobs: [payload],
      };

    default:
      return state;
  }
};
export default reducer;
