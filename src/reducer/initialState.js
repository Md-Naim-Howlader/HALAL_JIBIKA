import { getApplyJobFromLocalStorage } from "../utils/getApplyJobFromLocalStorage";
import { getEditDataFromLocalStorage } from "../utils/getEditDataFromLocalStorage";
import { getFavJobFromLocalStorage } from "../utils/getFavJobFromLocalStorage";

const initialState = {
  favJobs: getFavJobFromLocalStorage(),
  applyedJobs: getApplyJobFromLocalStorage(),
  editedJob: getEditDataFromLocalStorage(),
};
export default initialState;
