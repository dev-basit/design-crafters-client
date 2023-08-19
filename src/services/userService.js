import { http } from "./httpService";
import { baseURL } from "../utils/config";
import Joi from "joi";
import { showFailureToaster, showSuccessToaster } from "../utils/toaster";

const endpoint = baseURL + "users";

export const newUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().min(4).max(1024).required(),
  userType: Joi.string().valid("buyer", "seller").required(),
});

export async function addNewUser(user) {
  try {
    await http.post(endpoint, { ...user });
    showSuccessToaster("Successfuly created new account!");

    // navigate("/")
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
  }
}

export function login() {}

export function logout() {}
