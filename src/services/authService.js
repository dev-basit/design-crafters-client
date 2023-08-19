import Joi from "joi";
import { http } from "./httpService";
import { baseURL } from "../utils/config";
import { showFailureToaster, showSuccessToaster } from "../utils/toaster";
import { setLocalStorageItem } from "../utils/localStorage";

const loginApiEndpoint = baseURL + "auth";

export const userLoginSchema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().min(4).max(1024).required(),
});

export async function login(user) {
  try {
    const response = await http.post(loginApiEndpoint, { ...user });
    setLocalStorageItem("token", response.data.jwt);
    showSuccessToaster("Successfuly Logged In!");
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
  }
}

export function logout() {}
