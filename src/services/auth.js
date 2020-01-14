import axios from "axios";
import { BASE_URL } from "../config";

export async function login(officerID, password) {
  return axios.get(
    `${BASE_URL}/auth/officer/login?officer_id=${officerID}&password=${password}`
  );
}

export async function me(token) {
  return axios.get(`${BASE_URL}/me?token=${token}`);
}
