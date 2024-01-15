import { apiClient } from "./ApiClient";

export const executeBasicAuthenticationService = (token) => {
  // axios 클라이언트 구성
  return apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
};

export const executeJWTAuthenticationService = (username, password) => {
  // axios 클라이언트 구성
  return apiClient.post(`/authenticate`, { username, password });
};
