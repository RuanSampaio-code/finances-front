import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:3000/",
});

export async function Get(
  endPoint: string,
  data: unknown,
  token?: string
): Promise<AxiosResponse<any>> {
  const response = await api.get(endPoint, {
    params: data,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
}
