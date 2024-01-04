import axios from "axios";
import { baseURL } from "../baseURL/baseURL";

import Swal from "sweetalert2";

export const deleteJob = (id, data, setData) => {
  try {
    Swal.fire({
      title: "Are you want to delete job ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Job!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${baseURL}/${id}`);

        setData(data.filter((item) => item.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your Job has been deleted.",
          icon: "success",
        });
      }
    });
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "warning",
      title: "Delete Unsuccessful",
      toast: true,
      position: "top center",
      showConfirmButton: false,
      timer: 2000,
      showCloseButton: true,
    });
  }
};
