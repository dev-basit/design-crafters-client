import http from "./httpService";
import { baseURL } from "../utils/config";

export function getProjects() {
  return http.get(baseURL + "projects");
}
