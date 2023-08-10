export const WS_CONNECT = "WS_CONNECT";
export const WS_DISCONNECT = "WS_DISCONNECT";
export const WS_CONNECTING = "WS_CONNECTING";
export const WS_OPEN = "WS_OPEN";
export const WS_CLOSE = "WS_CLOSE";
export const WS_MESSAGE = "WS_MESSAGE";
export const WS_ERROR = "WS_ERROR";

export const WS_PERSONAL_CONNECT = "WS_PERSONAL_CONNECT";
export const WS_PERSONAL_DISCONNECT = "WS_PERSONAL_DISCONNECT";
export const WS_PERSONAL_CONNECTING = "WS_PERSONAL_CONNECTING";
export const WS_PERSONAL_OPEN = "WS_PERSONAL_OPEN";
export const WS_PERSONAL_CLOSE = "WS_PERSONAL_CLOSE";
export const WS_PERSONAL_MESSAGE = "WS_PERSONAL_MESSAGE";
export const WS_PERSONAL_ERROR = "WS_PERSONAL_ERROR";

export const wsActions = {
  wsConnect: WS_CONNECT,
  wsConnecting: WS_CONNECTING,
  wsDisconnect: WS_DISCONNECT,
  onOpen: WS_OPEN,
  onClose: WS_CLOSE,
  onError: WS_ERROR,
  onMessage: WS_MESSAGE,
};

export const wsPersonalActions = {
  wsConnect: WS_PERSONAL_CONNECT,
  wsConnecting: WS_PERSONAL_CONNECTING,
  wsDisconnect: WS_PERSONAL_DISCONNECT,
  onOpen: WS_PERSONAL_OPEN,
  onClose: WS_PERSONAL_CLOSE,
  onError: WS_PERSONAL_ERROR,
  onMessage: WS_PERSONAL_MESSAGE,
};

export function connect(url) {
  return function (dispatch) {
    dispatch({
      type: WS_CONNECT,
      payload: url,
    });
  };
}

export function disconnect() {
  return function (dispatch) {
    dispatch({
      type: WS_DISCONNECT,
    });
  };
}

export function connectPersonal(url) {
  return function (dispatch) {
    dispatch({
      type: WS_PERSONAL_CONNECT,
      payload: url,
    });
  };
}

export function disconnectPersonal() {
  return function (dispatch) {
    dispatch({
      type: WS_PERSONAL_DISCONNECT,
    });
  };
}
