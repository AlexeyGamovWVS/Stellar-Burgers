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
// Сохранение токена в куку

// const signIn = async form => {
//   const data = await loginRequest(form)
//     .then(res => {
//       let authToken;
//             // Ищем интересующий нас заголовок
//       res.headers.forEach(header => {
//         if (header.indexOf('Bearer') === 0) {
//                     // Отделяем схему авторизации от "полезной нагрузки токена",
//                     // Стараемся экономить память в куках (доступно 4кб)
//           authToken = header.split('Bearer ')[1];
//         }
//       });
//       if (authToken) {
//                 // Сохраняем токен в куку token
//         setCookie('token', authToken);
//       }
//       return res.json();
//     })
//     .then(data => data);

//   if (data.success) {
//         // Сохраняем пользователя в состояние приложения и нормализуем поле id (_id => id)
//     setUser({ ...data.user, id: data.user._id });
//   }
// };

// отправляем запрос на роут аутентификации
// export const getChatsRequest = async () =>
//   await fetch('https://cosmic.nomoreparties.space/api/chat', {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//             // Отправляем токен и схему авторизации в заголовке при запросе данных
//       Authorization: 'Bearer ' + getCookie('token')
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer'
//   });

// import { useAuth } from '../services/auth';
// import { Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// export function ProtectedRouteElement({ element }) {
//     let { getUser, ...auth } = useAuth();
//     const [isUserLoaded, setUserLoaded] = useState(false);

//     const init = async () => {
//     await getUser();
//     setUserLoaded(true);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//     if (!isUserLoaded) {
//     return null;
//   }

//     return auth.user ? element : <Navigate to="/login" replace/>;
// }
function checkResult(res) {
  return res.ok
    ? res.json()
    : Promise.reject(
        `Ошибка загрузки данных с сервера: ${res.status}`
      );
}
