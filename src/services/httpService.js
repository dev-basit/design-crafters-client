// import axios from "axios";

// axios.interceptors.response.use(null, (error) => {
//   const expectedError = error.response.status >= 400 && error.response.status < 500 && error.response;

//   if (!expectedError) {
//     console.log("unexpected error ", error);
//   }

//   return Promise.reject(expectedError);
// });

// const httpMethods = {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   delete: axios.delete,
// };

// export default httpMethods;

////////////////////////////////

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showFailureToaster, showSuccessToaster } from "../utils/toaster";

const axiosInstance = axios.create();

const loadingMessage = "Loading...";
const config = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 100, // Time in milliseconds (0.5 seconds)
  hideProgressBar: true,
  closeButton: false,
};

function showToast(type) {
  if (type === "success") return showSuccessToaster(loadingMessage, config);

  return showFailureToaster(loadingMessage, config);
}

axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    showToast("success");
    return response;
  },
  (error) => {
    const expectedError = error.response.status >= 400 && error.response.status < 500 && error.response;
    if (!expectedError) {
      showFailureToaster("unexpected error ");
    }

    showToast("error");
    return Promise.reject(expectedError);
  }
);

export const http = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
