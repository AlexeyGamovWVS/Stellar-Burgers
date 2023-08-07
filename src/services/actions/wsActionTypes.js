export const WS_CONNECT = "WS_CONNECT";
export const WS_DISCONNECT = "WS_DISCONNECT";

export const WS_CONNECTING = "WS_CONNECTING";
export const WS_OPEN = "WS_OPEN";
export const WS_CLOSE = "WS_CLOSE";
export const WS_MESSAGE = "WS_MESSAGE";
export const WS_ERROR = "WS_ERROR";

export const wsActions = {
  wsConnect: WS_CONNECT,
  wsConnecting: WS_CONNECTING,
  wsDisconnect: WS_DISCONNECT,
  onOpen: WS_OPEN,
  onClose: WS_CLOSE,
  onError: WS_ERROR,
  onMessage: WS_MESSAGE,
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
// export function connect(url) {
//   return {
//     type: WS_CONNECT,
//     url,
//   };
// }
