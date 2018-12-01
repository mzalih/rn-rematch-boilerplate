import * as api from "../api";
export async function login(payload) {
  var url = "https://reqres.in/api/users";
  return  await api.post(url,payload);
}