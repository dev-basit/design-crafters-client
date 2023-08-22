import { http } from "./httpService";

export const uploadImage = async (url, payload) => {
  try {
    const response = await http.post(url, payload);
    return response.data.secure_url;
  } catch (error) {
    throw error;
  }
};
