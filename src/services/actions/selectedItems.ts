import { IMainIngedientData } from "../utils/ingredients-types";

export const ADD_ITEM_TO_CHOICE: "ADD_ITEM_TO_CHOICE" = "ADD_ITEM_TO_CHOICE";
export const ADD_BUN_TO_CHOICE: "ADD_BUN_TO_CHOICE" = "ADD_BUN_TO_CHOICE";
export const REMOVE_ITEM_FROM_CHOICE: "REMOVE_ITEM_FROM_CHOICE" = "REMOVE_ITEM_FROM_CHOICE";
export const REMOVE_BUN_FROM_CHOICE: "ADD_BUN_TO_CHOICE" = "ADD_BUN_TO_CHOICE";
export const CLEAN_BURGER: "CLEAN_BURGER" = "CLEAN_BURGER";
export const SORT_ITEMS: "SORT_ITEMS" = "SORT_ITEMS";

export interface IAddItemAction {
  type: typeof ADD_ITEM_TO_CHOICE;
  payload: IMainIngedientData;
}
export interface IAddBunAction {
  type: typeof ADD_BUN_TO_CHOICE;
  payload: IMainIngedientData;
}
export interface IRemoveItemAction {
  type: typeof REMOVE_ITEM_FROM_CHOICE;
  payload: IMainIngedientData;
}
export interface IRemoveBunAction {
  type: typeof REMOVE_BUN_FROM_CHOICE;
  payload: null;
}
export interface ICleanBurgerAction {
  type: typeof CLEAN_BURGER;
}
export interface ISortItemsAction {
  type: typeof SORT_ITEMS;
  newChosenItems: IMainIngedientData[];
}

export type TSelectedItemsActions =
  | IAddItemAction
  | IAddBunAction
  | IRemoveItemAction
  | IRemoveBunAction
  | ICleanBurgerAction
  | ISortItemsAction;

export const addItemAction = (payload: IMainIngedientData): IAddItemAction => ({
  type: ADD_ITEM_TO_CHOICE,
  payload,
});
export const addBunAction = (payload: IMainIngedientData): IAddBunAction => ({
  type: ADD_BUN_TO_CHOICE,
  payload,
});
export const removeItemAction = (payload: IMainIngedientData): IRemoveItemAction => ({
  type: REMOVE_ITEM_FROM_CHOICE,
  payload,
});
export const removeBunAction = (): IRemoveBunAction => ({
  type: REMOVE_BUN_FROM_CHOICE,
  payload: null,
});
export const cleanBurgerAction = (): ICleanBurgerAction => ({
  type: CLEAN_BURGER,
});
export const sortItemsAction = (newChosenItems: IMainIngedientData[]): ISortItemsAction => ({
  type: SORT_ITEMS,
  newChosenItems,
});

export const sortComponents = (
  componentsArray: IMainIngedientData[],
  dragIndex: number,
  hoverIndex: number
) => {
  const newArray = [...componentsArray];
  const dragItem = componentsArray[dragIndex];
  const hoverItem = componentsArray[hoverIndex];
  newArray[dragIndex] = hoverItem;
  newArray[hoverIndex] = dragItem;
  return sortItemsAction(newArray);
};
