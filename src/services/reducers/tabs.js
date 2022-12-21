import { SET_ACTIVE_TAB } from "../actions/tabs";
import { COMPONENT_TYPES } from "../../components/utils/data";

const initialState = {
	activeTab: COMPONENT_TYPES.buns,
}

export const tabsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_TAB: {
			return {
				...state,
				activeTab: action.currentTab,
			}
		}
		default: {
			return state;
		}
	}
}