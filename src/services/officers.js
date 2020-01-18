import axios from "axios";
import { BASE_URL } from "../config";

export async function fetchAll() {
  return axios.get(`${BASE_URL}/officer/`);
}
