import { SET_SELECTED_INGREDIENT, REMOVE_SELECTED_INGREDIENT } from "../actions/currentItem";

const initialState = {
  selectedIngredient: null,
};

export const currentItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.ingredientData,
      };
    }
    case REMOVE_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};
