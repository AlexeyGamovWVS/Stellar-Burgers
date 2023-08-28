export const SET_SELECTED_INGREDIENT: "SET_SELECTED_INGREDIENT" = "SET_SELECTED_INGREDIENT";
export const REMOVE_SELECTED_INGREDIENT: "REMOVE_SELECTED_INGREDIENT" =
  "REMOVE_SELECTED_INGREDIENT";

export interface ISetSelectedIngr {
  type: typeof SET_SELECTED_INGREDIENT;
  ingredientData: any;
}

export interface IRemoveSelectedIngr {
  type: typeof REMOVE_SELECTED_INGREDIENT;
}

export const setIngredient = (ingredientData: any): ISetSelectedIngr => ({
  type: SET_SELECTED_INGREDIENT,
  ingredientData,
});

export const unsetIngredient = (): IRemoveSelectedIngr => ({
  type: REMOVE_SELECTED_INGREDIENT,
});

export type TSetCurrentIngredient = ISetSelectedIngr | IRemoveSelectedIngr;
