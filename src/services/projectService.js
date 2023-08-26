import Joi from "joi";
import { http } from "./httpService";
import { baseURL } from "../constants/config";

const projectApiEndpoint = baseURL + "projects";

const projectSchema = Joi.object({
  buyer: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  seller: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),

  // price: Joi.number().min(1).max(99999999).required(),
});

async function addNewProject(ids) {
  try {
    const response = await http.post(projectApiEndpoint, { ...ids });
    return response;
  } catch (err) {
    return false;
  }
}

export const projectService = {
  projectSchema,
  addNewProject,
};
