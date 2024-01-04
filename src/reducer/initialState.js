import { getApplyJobFromLocalStorage } from "../utils/getApplyJobFromLocalStorage";
import { getFavJobFromLocalStorage } from "../utils/getFavJobFromLocalStorage";

const initialState = {
  favJobs: getFavJobFromLocalStorage(),
  applyedJobs: getApplyJobFromLocalStorage(),
  updateJob: [],
};
export default initialState;
