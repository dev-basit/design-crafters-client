import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response.status >= 400 && error.response.status < 500 && error.response;

  if (!expectedError) {
    console.log("unexpected error ", error);
  }

  return Promise.reject(expectedError);
});

const httpMethods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpMethods;
