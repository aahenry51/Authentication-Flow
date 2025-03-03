import { axiosAPI } from "./axios";

export const getLoginData = async (values) => {
  try {
    const response = await axiosAPI.post("/api/login", {
      email: values.email,
      password: values.password,
      token: values.token,
    });

    return response;
  } catch (error) {}
};
