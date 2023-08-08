import { ORDER_STATUSES } from "../../utils/data";

export function getStatusText(status) {
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

export function countIngedientsInOrder(id, array) {
  return array.filter((item) => item._id === id).length;
}

export function getUniqArrayItems(arr) {
	return [...new Set(arr)]
}
