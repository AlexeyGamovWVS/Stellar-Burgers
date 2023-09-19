import { IIngredient } from "../../services/utils/types";

export function countIngedientsInOrder(id: string, array: IIngredient[]) {
  return array.filter((item) => item._id === id).length;
}

export function getUniqArrayItems(arr: IIngredient[]) {
  return [...new Set(arr)];
}
