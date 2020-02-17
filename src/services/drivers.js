import axios from "axios";
import { BASE_URL } from "../config";

export async function fetchAll() {
  return axios.get(`${BASE_URL}/driver/`);
}

export async function fetchOne(nid) {
  return axios.get(`${BASE_URL}/driver/${nid}`);
}
