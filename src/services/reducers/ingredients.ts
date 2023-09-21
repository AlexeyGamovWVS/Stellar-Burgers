import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED } from "../actions/ingredients";
import type { TItemsActions } from "../actions/ingredients";
import { IIngredient } from "../utils/ingredients-types";

type TIngredientsInitialState = {
  items: IIngredient[];
  itemsRequest: boolean;
  itemsFailed: boolean;
  itemsRequestMessage: string;
};

const initialState: TIngredientsInitialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  itemsRequestMessage: "",
};

export const ingredientsReducer = (state = initialState, action: TItemsActions) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
        itemsRequestMessage: "Загружаем продукты...",
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsRequest: false,
        itemsFailed: false,
        items: action.items,
        itemsRequestMessage: "",
      };
    }
    case GET_ITEMS_FAILED: {
      return {
        ...state,
        itemsRequest: false,
        itemsFailed: true,
        itemsRequestMessage: `Shit happens... ${action.err} Попробуйте обновить страничку`,
      };
    }
    default: {
      return state;
    }
  }
};
