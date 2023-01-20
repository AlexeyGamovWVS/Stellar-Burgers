export const ADD_ITEM_TO_CHOICE = "ADD_ITEM_TO_CHOICE";
export const ADD_BUN_TO_CHOICE = "ADD_BUN_TO_CHOICE";
export const REMOVE_ITEM_FROM_CHOICE = "REMOVE_ITEM_FROM_CHOICE";
export const REMOVE_BUN_FROM_CHOICE = 'ADD_BUN_TO_CHOICE';
export const CLEAN_BURGER = "CLEAN_BURGER";
export const SORT_ITEMS = "SORT_ITEMS";

export const sortComponents = (componentsArray, dragIndex, hoverIndex) => {
	const newArray = componentsArray;
	const dragItem = componentsArray[dragIndex];
	const hoverItem = componentsArray[hoverIndex];
	newArray[dragIndex] = hoverItem;
	newArray[hoverIndex] = dragItem;
	return {
		type: SORT_ITEMS,
		newChosenItems: newArray,
	}
}
