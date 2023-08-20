import { http } from "./httpService";
import { baseURL } from "../constants/config";

export function getProjects() {
  return http.get(baseURL + "projects");
}
