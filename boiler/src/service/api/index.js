import { token } from "../auth";
export async function get(url) {
    var xaccesstoken = (await token()) + "";
    response = await fetch(url, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": xaccesstoken
      }
    });
    return response.json();
}

export async function post(url,payload) {
    var xaccesstoken = (await token()) + "";
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": xaccesstoken
      },
      body: JSON.stringify(payload)
    });
   return response.json();
}

export async function put(url,payload) {
    var xaccesstoken = (await token()) + "";
    response = await fetch(url, {
      method: "PUT",
      headers: {
        "Cache-Control": "no-cache",
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": xaccesstoken
      },
      body: JSON.stringify(payload)
    });

   return response.json();
}

export async function exeDelete(url,payload) {
    var xaccesstoken = (await token()) + "";
    response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Cache-Control": "no-cache",
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": xaccesstoken
      },
      body: JSON.stringify(payload)
    });
   return response.json();
}