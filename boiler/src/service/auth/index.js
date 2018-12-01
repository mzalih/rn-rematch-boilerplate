import * as api from "../api";

export async function token() {
    return "@TODO ADD TOKEN ";
}

export async function getUser() {
  var url = "https://randomuser.me/api/";
  return  await api.get(url,{});
}

export async function loggedIn() {
    return false;
}

export async function logout() {
    return false;
}

