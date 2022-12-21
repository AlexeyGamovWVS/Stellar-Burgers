import {
  ADD_ITEM_TO_CHOICE,
  REMOVE_ITEM_FROM_CHOICE,
} from "../actions/chosenIngredients";

const initialState = {
  selectedItems: [],
  bunIsSelected: false,
};

export const selectedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CHOICE:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.chosenItem],
        bunIsSelected: action.isBun ? true : state.bunIsSelected,
      };
    case REMOVE_ITEM_FROM_CHOICE:
      return {
        ...state,
        selectedItems: [
          ...state.selectedItems.filter(
            (item) => item._id !== action.chosenItem._id
          ),
        ],
        bunIsSelected: action.isBun ? false : state.bunIsSelected,
      };
    default:
      return state;
  }
};
