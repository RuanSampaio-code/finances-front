import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:3333/",
});

export async function Post(
  endPoint: string,
  data: unknown,
  token?: string
): Promise<AxiosResponse<any>> {
  const response = await api.post(endPoint, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
}

export async function Get(
  endPoint: string,
  token?: string,
  data?: unknown
): Promise<AxiosResponse<any>> {
  const response = await api.get(endPoint, {
    params: data,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
}
