import { URL_API } from "./data";

export async function api() {
  const res = await fetch(`${URL_API}/ingredients`);
  return checkResult(res);
}

export async function sendOrder(data) {
  const res = await fetch(`${URL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: data }),
  });
  return checkResult(res);
}

export async function sendEmail(data) {
  const res = await fetch(`${URL_API}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: data }),
  });
  return checkResult(res);
}

export async function sendRegisterData(email, name, password) {
  const res = await fetch(`${URL_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });
  return checkResult(res);
}

export async function sendLoginData(email, password) {
  const res = await fetch(`${URL_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return checkResult(res);
}

export async function sendRefreshToken(token) {
  const res = await fetch(`${URL_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  return checkResult(res);
}

export async function sendResetPassRequest(password, token) {
  const res = await fetch(`${URL_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  });
  return checkResult(res);
}

export async function sendLogoutRequest(token) {
  const res = await fetch(`${URL_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  return checkResult(res);
}

export async function sendUserInfoRequest(token) {
  const res = await fetch(`${URL_API}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
  return checkResult(res);
}

export async function sendChangeUserInfoRequest(
  token,
  name,
  email,
  password
) {
  const res = await fetch(`${URL_API}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ name, email, password }),
  });
  return checkResult(res);
}

function checkResult(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}
