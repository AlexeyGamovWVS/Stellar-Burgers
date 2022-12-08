import { URL_API } from "./data";

async function api() {
  function checkResult(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
  }
  const res = await fetch(URL_API);
  return checkResult(res);
}

export default api;
