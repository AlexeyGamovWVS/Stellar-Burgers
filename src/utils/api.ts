import { IIngrPromise } from "../services/utils/ingredients-types";
import { IFetchOrderResponse, IMyOrder } from "../services/utils/order-types";
import { IResponse } from "../services/utils/types";
import { IUserResponse, IUserWithPass, TTokenResponse } from "../services/utils/user-types";
import { getCookie, setCookie } from "./cookie";
import { ACCESSES_EXPIRED_ERROR, ACCESS_TOKEN, REFRESH_TOKEN, URL_API } from "./data";

interface IOptions {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  headers: {
    "Content-Type": string;
    authorization: string;
  };
  body?: string;
}

export async function api(): Promise<IIngrPromise> {
  const res = await fetch(`${URL_API}/ingredients`);
  return checkResult(res);
}

export async function sendOrder(data: string[]): Promise<IMyOrder> {
  const res = await fetch(`${URL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie(ACCESS_TOKEN),
    } as HeadersInit,
    body: JSON.stringify({ ingredients: data }),
  });
  return checkResult(res);
}

export async function getOrderData(number: string): Promise<IFetchOrderResponse> {
  const res = await fetch(`${URL_API}/orders/${number}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResult(res);
}

export async function sendEmail(email: string): Promise<IResponse> {
  const res = await fetch(`${URL_API}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return checkResult(res);
}

export async function sendUserData({
  endpoint,
  ...rest
}: IUserWithPass & { endpoint: string }): Promise<IUserResponse> {
  const res = await fetch(`${URL_API}/auth/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  });
  return checkResult(res);
}

export function sendRefreshToken(): Promise<TTokenResponse> {
  return fetch(`${URL_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ token: getCookie(REFRESH_TOKEN) }),
  }).then(checkResult) as Promise<TTokenResponse>;
}

export const fetchWithRefresh = async (url: string, options: IOptions): Promise<IUserResponse> => {
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

export async function sendResetPassRequest(password: string, code: string): Promise<IResponse> {
  const res = await fetch(`${URL_API}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token: code }),
  });
  return checkResult(res);
}

export async function sendLogoutRequest(): Promise<IResponse> {
  const res = await fetch(`${URL_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: getCookie(REFRESH_TOKEN) }),
  });
  return checkResult(res);
}

export function sendUserInfoRequest(): Promise<IUserResponse> {
  return fetchWithRefresh(`${URL_API}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie(ACCESS_TOKEN),
    },
  });
}

export function sendChangeUserInfoRequest(
  name: string,
  email: string,
  password: string
): Promise<IUserResponse> {
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

const checkResult = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
};
