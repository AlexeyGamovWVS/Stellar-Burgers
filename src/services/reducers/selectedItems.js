import {
  ADD_ITEM_TO_CHOICE,
  REMOVE_ITEM_FROM_CHOICE,
  CLEAN_BURGER,
  SORT_ITEMS,
  ADD_BUN_TO_CHOICE,
  REMOVE_BUN_FROM_CHOICE,
} from "../actions/selectedItems";

const initialState = {
  selectedItems: [],
  selectedBun: null,
};

export const selectedItemsReducer = (state = initialState, action) => {
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
        selectedItems: [...state.selectedItems, action.chosenItem],
      };
    case ADD_BUN_TO_CHOICE:
      return {
        ...state,
        selectedBun: action.chosenItem,
      };
    case REMOVE_BUN_FROM_CHOICE:
      return {
        ...state,
        selectedBun: null,
      };
    case REMOVE_ITEM_FROM_CHOICE:
      return {
        ...state,
        selectedItems: [
          ...state.selectedItems.filter((item) => item.index !== action.chosenItem.index),
        ],
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
