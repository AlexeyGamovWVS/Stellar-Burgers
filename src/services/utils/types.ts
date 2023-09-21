import { IMainIngedientData } from "./ingredients-types";

export interface IResponse {
  success: boolean;
  message: string;
}

/////////// COMPONENTS ///////////

export interface IOrderCard {
  date: string;
  number: number | string;
  ingredientsPictures: string[];
  name: string;
  price: number;
  status?: string;
  state: any;
  location: any;
}

export interface IIngredientRow {
  title: string;
  children: JSX.Element[];
  id: string;
  rowRef: React.RefObject<HTMLDivElement>;
}

export interface IListItemInterface {
  item: IMainIngedientData;
  position?: "top" | "bottom" | undefined;
  iconVis: boolean;
  index?: number;
  moveListItem?: (dragIndex: number, hoverIndex: number) => void;
}

export interface IIngredientsList {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  rowsRefObj: {
    bunsRef: React.RefObject<HTMLDivElement>;
    saucesRef: React.RefObject<HTMLDivElement>;
    mainsRef: React.RefObject<HTMLDivElement>;
  };
}
