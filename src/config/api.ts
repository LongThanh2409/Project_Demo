import axios from "axios";
import appConfig from ".";

export const callApis = () => {
  const callApi = axios.create({
    baseURL: appConfig.apiUrl,
    params: {
      api_key: appConfig.keyapi,
      language: "vi-VN",
    },
  });
  return callApi;
};
