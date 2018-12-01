import * as api from "../api";
import user from "./../../data/user"

export async function token() {
    return "@TODO ADD TOKEN ";
}

export async function getUser() {
  var url = "https://randomuser.me/api/";
  return  await api.get(url,{});
}

export async function loggedIn() {
	return  await user.isLogged();
}

export async function logout() {
	//Invoke API Call here to remove token from server etc ..
	await user.logged(false);;
    return false;
}
export async function login(payload) {
  var url = "https://reqres.in/api/users";
  return  await api.post(url,payload);
}

