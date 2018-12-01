import * as api from "../api";
import user from "./../../data/user"

export async function getUsers() {
  var url = "https://randomuser.me/api/?results=50";
  return  await api.get(url,{});
}


