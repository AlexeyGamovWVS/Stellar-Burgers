export const ADD_ITEM_TO_CHOICE: "ADD_ITEM_TO_CHOICE" = "ADD_ITEM_TO_CHOICE";
export const ADD_BUN_TO_CHOICE: "ADD_BUN_TO_CHOICE" = "ADD_BUN_TO_CHOICE";
export const REMOVE_ITEM_FROM_CHOICE: "REMOVE_ITEM_FROM_CHOICE" = "REMOVE_ITEM_FROM_CHOICE";
export const REMOVE_BUN_FROM_CHOICE: "ADD_BUN_TO_CHOICE" = "ADD_BUN_TO_CHOICE";
export const CLEAN_BURGER: "CLEAN_BURGER" = "CLEAN_BURGER";
export const SORT_ITEMS: "SORT_ITEMS" = "SORT_ITEMS";

export interface IAddItemAction {
  type: typeof ADD_ITEM_TO_CHOICE;
}
export interface IAddBunAction {
  type: typeof ADD_BUN_TO_CHOICE;
}
export interface IRemoveItemAction {
  type: typeof REMOVE_ITEM_FROM_CHOICE;
}
export interface IRemoveBunAction {
  type: typeof REMOVE_BUN_FROM_CHOICE;
}
export interface ICleanBurgerAction {
  type: typeof CLEAN_BURGER;
}
export interface ISortItemsAction {
  type: typeof SORT_ITEMS;
  newChosenItems: Array<any>;
}

export type TSelectedItemsActions =
  | IAddItemAction
  | IAddBunAction
  | IRemoveItemAction
  | IRemoveBunAction
  | ICleanBurgerAction
  | ISortItemsAction;

export const addItemAction = (): IAddItemAction => ({
  type: ADD_ITEM_TO_CHOICE,
});
export const addBunAction = (): IAddBunAction => ({
  type: ADD_BUN_TO_CHOICE,
});
export const removeItemAction = (): IRemoveItemAction => ({
  type: REMOVE_ITEM_FROM_CHOICE,
});
export const removeBunAction = (): IRemoveBunAction => ({
  type: REMOVE_BUN_FROM_CHOICE,
});
export const cleanBurgerAction = (): ICleanBurgerAction => ({
  type: CLEAN_BURGER,
});
export const sortItemsAction = (newChosenItems: any[]): ISortItemsAction => ({
  type: SORT_ITEMS,
  newChosenItems,
});

export const sortComponents = (componentsArray: any[], dragIndex: number, hoverIndex: number) => {
  const newArray = [...componentsArray];
  const dragItem = componentsArray[dragIndex];
  const hoverItem = componentsArray[hoverIndex];
  newArray[dragIndex] = hoverItem;
  newArray[hoverIndex] = dragItem;
  return sortItemsAction(newArray);
};
