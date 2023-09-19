import {
  ADD_ITEM_TO_CHOICE,
  REMOVE_ITEM_FROM_CHOICE,
  CLEAN_BURGER,
  SORT_ITEMS,
  ADD_BUN_TO_CHOICE,
  REMOVE_BUN_FROM_CHOICE,
} from "../actions/selectedItems";
import type { TSelectedItemsActions } from "../actions/selectedItems";
import { IMainIngedientData } from "../utils/types";
type TSelectedIngredientsInitialState = {
  selectedItems: IMainIngedientData[];
  selectedBun: IMainIngedientData | null;
};
const initialState: TSelectedIngredientsInitialState = {
  selectedItems: [],
  selectedBun: null,
};

export const selectedItemsReducer = (state = initialState, action: TSelectedItemsActions) => {
  switch (action.type) {
    case CLEAN_BURGER: {
      return {
        ...state,
        selectedItems: [],
        selectedBun: null,
      };
    }
    case ADD_ITEM_TO_CHOICE:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case ADD_BUN_TO_CHOICE:
      return {
        ...state,
        selectedBun: action.payload,
      };
    case REMOVE_BUN_FROM_CHOICE:
      return {
        ...state,
        selectedBun: action.payload,
      };
    case REMOVE_ITEM_FROM_CHOICE:
      return {
        ...state,
        selectedItems: [...state.selectedItems.filter((item) => item._id !== action.payload._id)],
      };
    case SORT_ITEMS:
      return {
        ...state,
        selectedItems: action.newChosenItems,
      };
    default:
      return state;
  }
};
