import { IIngredient } from "../../services/utils/ingredients-types";

export function countIngedientsInOrder(id: string, array: (IIngredient | undefined)[]) {
  return array.filter((item) => item?._id === id).length;
}

export function getUniqArrayItems(arr: (IIngredient | undefined)[]) {
  return [...new Set(arr)];
}
