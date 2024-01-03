import {
  ADD_APPLY,
  ADD_FAVORITE,
  ADD_JOBS,
  DELETE_JOBS,
  REMOVE_APPLY,
  REMOVE_FAVORITE,
} from "./actionsType";

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
    case ADD_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, payload],
      };
    case DELETE_JOBS:
      return {
        ...state,
        jobs: [...state.jobs].filter((job) => job.id !== payload),
      };
    case ADD_APPLY:
      return {
        ...state,
        applyedJobs: [state.applyedJobs, payload],
      };
    case REMOVE_APPLY:
      return {
        ...state,
        applyedJobs: [...state.applyedJobs].filter((job) => job.id !== payload),
      };

    default:
      return state;
  }
};
export default reducer;
