import axios from "axios";
import { BASE_URL } from "../config";

export async function fetchAll() {
  return axios.get(`${BASE_URL}/officer/`);
}

export async function fetchOne(officer_id) {
  return axios.get(`${BASE_URL}/officer/${officer_id}`);
}
