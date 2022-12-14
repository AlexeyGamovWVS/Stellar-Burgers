import { URL_API } from "./data";

export async function api() {
  const res = await fetch(`${URL_API}/ingredients`);
  return checkResult(res);
}

export async function sendOrder(data) {
  const res = await fetch(`${URL_API}/orders`, {
    method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
    body: JSON.stringify({ ingredients: data }),
  });
	return checkResult(res);
}

function checkResult(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
}
