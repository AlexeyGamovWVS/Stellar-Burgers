interface IWsStatus {
  online: string;
  offline: string;
  connecting: string;
}

export const WS_STATUS: IWsStatus = {
  online: "online",
  offline: "offline",
  connecting: "connecting",
};
