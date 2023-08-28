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


// reducers/todo.ts
// import type { TTodoItem } from '../types/data';

// // Допустимые экшены для данного редьюсера
// import type { TTodoActions } from '../actions';
// import { 
//     GET_TODO_LIST,
//     GET_TODO_LIST_FAILED,
//     GET_TODO_LIST_SUCCESS,
//     DELETE_TODO,
//     DELETE_TODO_FAILED,
//     DELETE_TODO_SUCCESS,
//     ADD_TODO,
//     ADD_TODO_FAILED,
//     ADD_TODO_SUCCESS
// } from '../constants';

// type TTodoListState = {
//   list: ReadonlyArray<TTodoItem>;

//     listRequest: boolean;
//     listRequestFailed: boolean;

//     addRequest: boolean;
//     addRequestFailed: boolean;

//     deleteRequest: boolean;
//     deleteRequestFailed: boolean;
// }

// // Начальное состояние редьюсера
// const todoInitialState: TTodoListState = {
//     list: [],

//     listRequest: false,
//     listRequestFailed: false,

//     addRequest: false,
//     addRequestFailed: false,

//     deleteRequest: false,
//     deleteRequestFailed: false
// }

// Редьюсер
// export const todoReducer = (state = todoInitialState, action: TTodoActions): TTodoListState => {
//   switch (action.type) {

//     case GET_TODO_LIST: {
//       return { ...state, listRequest: true, listRequestFailed: false };
//     }
//         case GET_TODO_LIST_SUCCESS: {
//       return { ...state, listRequest: false, list: action.list };
//     }
//     case GET_TODO_LIST_FAILED: {
//       return { ...state, listRequest: false, listRequestFailed: true };
//     }
    

//     case DELETE_TODO: {
//       return { ...state, deleteRequest: true, deleteRequestFailed: false };
//     }
//         case DELETE_TODO_SUCCESS: {
//       return { ...state, deleteRequest: false, list: action.list };
//     }
//     case DELETE_TODO_FAILED: {
//       return { ...state, deleteRequest: false, deleteRequestFailed: true };
//     }
    

//     case ADD_TODO: {
//       return { ...state, addRequest: true, deleteRequestFailed: false };
//     }
//         case ADD_TODO_SUCCESS: {
//       return { ...state, addRequest: false, list: action.list };
//     }
//     case ADD_TODO_FAILED: {
//       return { ...state, addRequest: false, deleteRequestFailed: true };
//     }
    

//     default: {
//       return state;
//     }
//   }
// };