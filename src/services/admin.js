import axios from "axios";
import { BASE_URL } from "../config";

export async function updateOfficer(officer) {
  const updateDoc = {
    officer_id: officer.officer_id,
    first_name: officer.first_name,
    last_name: officer.last_name,
    permission_level: officer.permission_level,
    contact_number: officer.contact_number,
    police_station: officer.police_station,
    email: officer.email,
    nic: officer.nic
  };

  return axios.post(
    `${BASE_URL}/admin/update-officer/${officer.officer_id}`,
    updateDoc
  );
}
