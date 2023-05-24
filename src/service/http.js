import axios from "axios";
export const API_URL = `http://localhost:8080/api/auth`;

const ACCESS_TOKEN_NAME = "accessToken";
const REFRESH_TOKEN_NAME = "refreshToken";

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
  });
  
  $api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      ACCESS_TOKEN_NAME
    )}`;
    return config;
  });
  
  $api.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response.status == 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        try {
          const response = (await axios.post)(
            `${API_URL}/api/refresh-token`,
            {
              withCredentials: true,
            },
            {
              refreshToken: localStorage.getItem(REFRESH_TOKEN_NAME),
            }
          );
          localStorage.setItem(ACCESS_TOKEN_NAME, response.data.accessToken);
          localStorage.setItem(REFRESH_TOKEN_NAME, response.data.refreshToken);
          return $api.request(originalRequest);
        } catch (e) {
          console.log("НЕ АВТОРИЗОВАН");
        }
      }
      if (error.response && error.response.data) {
        return error.response.data;
      }
      throw error;
    }
  );
  
  export default $api;