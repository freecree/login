import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { SuccessLoginResponse } from '../models/response/LoginResponse';

const API_URL = 'https://auth-qa.qencode.com/v1/auth/';
const $api = axios.create({
  baseURL: API_URL,
});

export const login = (
  email: string,
  password: string,
): Promise<AxiosResponse<SuccessLoginResponse>> => {
  return $api.post<SuccessLoginResponse>('/login', { email, password });
};
