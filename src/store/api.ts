import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8090"
});

export async function fetchMessage(param?: string) {
  const response = await client.get(`/${param}`);
  console.log(`response=${response}`);
  return response.data as string;
}
