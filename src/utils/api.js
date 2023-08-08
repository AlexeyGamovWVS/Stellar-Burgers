import { getCookie, setCookie } from "./cookie";
import { ACCESSES_EXPIRED_ERROR, ACCESS_TOKEN, REFRESH_TOKEN, URL_API } from "./data";

export async function api() {
  const res = await fetch(`${URL_API}/ingredients`);
  return checkResult(res);
}

export async function sendOrder(data) {
  const res = await fetch(`${URL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie(ACCESS_TOKEN),
    },
    body: JSON.stringify({ ingredients: data }),
  });
  return checkResult(res);
}

export async function getOrderData(number) {
  const res = await fetch(`${URL_API}/orders/${number}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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

export function sendRefreshToken() {
  return fetch(`${URL_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ token: getCookie(REFRESH_TOKEN) }),
  }).then(checkResult);
}

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResult(res); //err === res.status
  } catch (err) {
    if (err === ACCESSES_EXPIRED_ERROR) {
      const refreshData = await sendRefreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      setCookie(ACCESS_TOKEN, refreshData.accessToken);
      setCookie(REFRESH_TOKEN, refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResult(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export async function sendResetPassRequest(password, code) {
  const res = await fetch(`${URL_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token: code }),
  });
  return checkResult(res);
}

export async function sendLogoutRequest() {
  const res = await fetch(`${URL_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: getCookie(REFRESH_TOKEN) }),
  });
  return checkResult(res);
}

export function sendUserInfoRequest() {
  return fetchWithRefresh(`${URL_API}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie(ACCESS_TOKEN),
    },
  });
}

export function sendChangeUserInfoRequest(name, email, password) {
  const token = getCookie(ACCESS_TOKEN);
  return fetchWithRefresh(`${URL_API}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ name, email, password }),
  });
}

function checkResult(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}
