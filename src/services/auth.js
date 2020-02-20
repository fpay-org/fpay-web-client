import axios from "axios";
import { BASE_URL } from "../config";

export async function login(officerID, password) {
  return axios.get(
    `${BASE_URL}/auth/officer/login?officer_id=${officerID}&password=${password}`
  );
}

export async function register(
  officerID,
  password,
  firstName,
  lastName,
  contactNumber,
  policeStation,
  email,
  nic
) {
  const body = {
    officer_id: officerID,
    password: password,
    first_name: firstName,
    last_name: lastName,
    role: "officer",
    permission_level: 1,
    fines_issued: [],
    contact_number: contactNumber,
    police_station: policeStation,
    email: email,
    nic: nic
  };

  return axios.post(`${BASE_URL}/auth/officer/register`, body);
}

export async function me(token) {
  return axios.get(`${BASE_URL}/me?token=${token}`);
}
