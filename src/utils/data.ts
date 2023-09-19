const URL_API = "https://norma.nomoreparties.space/api";
const WS_LINK = "wss://norma.nomoreparties.space/orders";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const ACCESSES_EXPIRED_ERROR = 403;

const COMPONENT_TYPES = {
  buns: "bun",
  sauces: "sauce",
  mains: "main",
};

const ORDER_STATUSES = {
  created: "created",
  pending: "pending",
  done: "done",
  canselled: "canselled",
};

function getStatusText(status: string) {
  switch (status) {
    case ORDER_STATUSES.created:
      return "Создан";
    case ORDER_STATUSES.pending:
      return "Готовится";
    case ORDER_STATUSES.done:
      return "Выполнен";
    case ORDER_STATUSES.canselled:
      return "Отменён";
    default:
      return "";
  }
}

export {
  URL_API,
  COMPONENT_TYPES,
  WS_LINK,
  ORDER_STATUSES,
  ACCESS_TOKEN,
  ACCESSES_EXPIRED_ERROR,
  REFRESH_TOKEN,
  getStatusText,
};
