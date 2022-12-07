import {URL_API} from "./data";

async function api() {
	function checkResult(res) {
		res.ok ? res = res.json() : res = Promise.reject(`Ошибка загрузки данных с сервера: ${res.status}`);
		return res;
	}
	const res = await fetch(URL_API);
	return checkResult(res);
}

export default api;