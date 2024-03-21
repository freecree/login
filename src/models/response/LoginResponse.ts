export interface SuccessLoginResponse {
  error: number;
  detail: unknown[] | string | number;
  timestamp: number;
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
}

export interface ErrorLoginResponse {
  detail: string | unknown[];
}
