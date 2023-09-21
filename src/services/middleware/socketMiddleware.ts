import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../..";

export type TWsActionTypes = {
  wsConnect: string;
  wsDisconnect: string;
  wsSendMessage?: string;
  wsConnecting: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export const socketMiddleware = (wsActions: TWsActionTypes): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const {
        wsConnect,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
        wsConnecting,
        wsDisconnect,
      } = wsActions;

      if (wsConnect === action.type) {
        socket = new WebSocket(action.payload);
        dispatch({ type: wsConnecting });
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: "Ошибка подключения по WebSocket" });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose });
        };

        if (wsSendMessage && wsSendMessage === action.type) {
          socket.send(JSON.stringify(action.payload));
        }

        if (wsDisconnect === action.type) {
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  };
};
