import Joi from "joi";
import { http } from "./httpService";
import { baseURL } from "../constants/config";
import { showFailureToaster, showSuccessToaster } from "../utils/toaster";
import { setLocalStorageItem } from "../utils/localStorage";

const userApiEndpoint = baseURL + "users";

const newUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().min(4).max(1024).required(),
  userType: Joi.string().valid("buyer", "seller").required(),
});

async function addNewUser(user) {
  try {
    const response = await http.post(userApiEndpoint, { ...user });
    setLocalStorageItem("token", response.headers["x-auth-token"]);
    showSuccessToaster("Successfuly created new account!");
    return true;
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

export const userService = {
  newUserSchema,
  addNewUser,
};
