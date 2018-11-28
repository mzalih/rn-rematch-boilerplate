import * as api from "../api";
export async function login(payload) {
  var url = "http://google.com/";
  return  await api.post(url,payload);
}