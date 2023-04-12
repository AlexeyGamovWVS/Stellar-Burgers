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
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
    // redirect: '/profile',
    // referrerPolicy: 'no-referrer',
    body: JSON.stringify({ email, password }),
  });
  return checkResult(res);
}
// newrequests !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// лагоритм сохранения данных о пользователе в стейт
// Авторизация пользователей в приложении.
// Получение данных от сервера о текущем пользователе.
// Сохранение данных в глобальное хранилище.
// Использование этих данных на любом нужном уровне приложения для вариативного рендеринга компонентов и контента.

// Другими словами: Отправляем экшен, который выполняет запрос на авторизацию.
// После успешного выполнения запроса на авторизацию записываем данные в Redux.
// С помощью useSelector получаем доступ к данным о текущем пользователе.
// PROFIT!

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

// Сохранение токена в куку
// export function setCookie(name, value, props) {
//   props = props || {};
//   let exp = props.expires;
//   if (typeof exp == 'number' && exp) {
//     const d = new Date();
//     d.setTime(d.getTime() + exp * 1000);
//     exp = props.expires = d;
//   }
//   if (exp && exp.toUTCString) {
//     props.expires = exp.toUTCString();
//   }
//   value = encodeURIComponent(value);
//   let updatedCookie = name + '=' + value;
//   for (const propName in props) {
//     updatedCookie += '; ' + propName;
//     const propValue = props[propName];
//     if (propValue !== true) {
//       updatedCookie += '=' + propValue;
//     }
//   }
//   document.cookie = updatedCookie;
// }
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

// export function getCookie(name) {
//   const matches = document.cookie.match(
//     new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
//   );
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }

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
