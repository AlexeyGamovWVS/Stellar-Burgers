import { IOrders } from "../reducers/soketMiddleware";

export const WS_CONNECT: "WS_CONNECT" = "WS_CONNECT";
export const WS_DISCONNECT: "WS_DISCONNECT" = "WS_DISCONNECT";
export const WS_CONNECTING: "WS_CONNECTING" = "WS_CONNECTING";
export const WS_OPEN: "WS_OPEN" = "WS_OPEN";
export const WS_CLOSE: "WS_CLOSE" = "WS_CLOSE";
export const WS_MESSAGE: "WS_MESSAGE" = "WS_MESSAGE";
export const WS_ERROR: "WS_ERROR" = "WS_ERROR";

export const WS_PERSONAL_CONNECT: "WS_PERSONAL_CONNECT" = "WS_PERSONAL_CONNECT";
export const WS_PERSONAL_DISCONNECT: "WS_PERSONAL_DISCONNECT" = "WS_PERSONAL_DISCONNECT";
export const WS_PERSONAL_CONNECTING: "WS_PERSONAL_CONNECTING" = "WS_PERSONAL_CONNECTING";
export const WS_PERSONAL_OPEN: "WS_PERSONAL_OPEN" = "WS_PERSONAL_OPEN";
export const WS_PERSONAL_CLOSE: "WS_PERSONAL_CLOSE" = "WS_PERSONAL_CLOSE";
export const WS_PERSONAL_MESSAGE: "WS_PERSONAL_MESSAGE" = "WS_PERSONAL_MESSAGE";
export const WS_PERSONAL_ERROR: "WS_PERSONAL_ERROR" = "WS_PERSONAL_ERROR";

export interface IWs_ConnectAction {
  readonly type: typeof WS_CONNECT;
  payload: string;
}

export interface IWs_DisconnectAction {
  readonly type: typeof WS_DISCONNECT;
}

export interface IWs_ConnectingAction {
  readonly type: typeof WS_CONNECTING;
}

export interface IWs_OpenAction {
  readonly type: typeof WS_OPEN;
}

export interface IWs_CloseAction {
  readonly type: typeof WS_CLOSE;
}

export interface IWs_MessageAction {
  readonly type: typeof WS_MESSAGE;
  payload: Omit<IOrders, "status" | "connectingErrorMessage">;
}

export interface IWs_ErrorAction {
  readonly type: typeof WS_ERROR;
  payload: string;
}

export type TWsActions =
  | IWs_ConnectAction
  | IWs_DisconnectAction
  | IWs_ConnectingAction
  | IWs_OpenAction
  | IWs_CloseAction
  | IWs_MessageAction
  | IWs_ErrorAction;

/// PERSONAL

export interface IWs_PersonalConnectAction {
  readonly type: typeof WS_PERSONAL_CONNECT;
  payload: string;
}

export interface IWs_PersonalDisconnectAction {
  readonly type: typeof WS_PERSONAL_DISCONNECT;
}

export interface IWs_PersonalConnectingAction {
  readonly type: typeof WS_PERSONAL_CONNECTING;
}

export interface IWs_PersonalOpenAction {
  readonly type: typeof WS_PERSONAL_OPEN;
}

export interface IWs_PersonalCloseAction {
  readonly type: typeof WS_PERSONAL_CLOSE;
}

export interface IWs_PersonalMessageAction {
  readonly type: typeof WS_PERSONAL_MESSAGE;
  payload: Pick<IOrders, "orders">;
}

export interface IWs_PersonalErrorAction {
  readonly type: typeof WS_PERSONAL_ERROR;
  payload: string;
}

export type TWsPersonalActions =
  | IWs_PersonalConnectAction
  | IWs_PersonalDisconnectAction
  | IWs_PersonalConnectingAction
  | IWs_PersonalOpenAction
  | IWs_PersonalCloseAction
  | IWs_PersonalMessageAction
  | IWs_PersonalErrorAction;

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

export function connect(url: string) {
  return {
    type: WS_CONNECT,
    payload: url,
  };
}

export function disconnect() {
  return {
    type: WS_DISCONNECT,
  };
}

export function connectPersonal(url: string) {
  return {
    type: WS_PERSONAL_CONNECT,
    payload: url,
  };
}

export function disconnectPersonal() {
  return {
    type: WS_PERSONAL_DISCONNECT,
  };
}
