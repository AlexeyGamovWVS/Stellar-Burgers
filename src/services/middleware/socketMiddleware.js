// socketMiddleware.js

export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsConnect,
        wsConnecting,
        wsDisconnect,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsConnect) {
        socket = new WebSocket(action.payload); // payload === url
        dispatch({ type: wsConnecting });
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = () => {
          dispatch({ type: onError, payload: "Ошибка подключения по WebSocket" });
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = () => {
          dispatch({ type: onClose });
        };

        if (type === wsSendMessage) {
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(action.payload));
        }

        if (type === wsDisconnect) {
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  };
};
