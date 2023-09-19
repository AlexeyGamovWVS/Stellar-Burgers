export interface IMainIngedientData {
  image: string;
  name: string;
  price: number;
  type: string;
  _id: string;
}
export interface IIngredient extends IMainIngedientData {
  calories: number;
  carbohydrates: number;
  fat: number;
  image_large: string;
  image_mobile: string;
  proteins: number;
  __v: number;
}

export interface IIngrPromise {
  status: any;
  success: boolean;
  data: IIngredient[];
}
export interface IMainIngedientData {
  image: string;
  name: string;
  price: number;
  type: string;
  _id: string;
}
export interface IIngredient extends IMainIngedientData {
  calories: number;
  carbohydrates: number;
  fat: number;
  image_large: string;
  image_mobile: string;
  proteins: number;
  __v: number;
}

export interface IOrderDetails {
  _id: string;
  ingredients: string[];
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
}

interface IOwnerInstance {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface IOrderInstance {
  ingredients: IIngredient[];
  _id: string;
  owner: IOwnerInstance;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
}

export interface IFullOrderDetails {
  success: boolean;
  name: string;
  order: IOrderInstance;
}

export interface IUser {
  email: string;
}

export interface IUserWithPass extends IUser {
  password: string;
}

export interface IUserFull extends IUserWithPass {
  name: string;
  endpoint: string;
}

export type TOrderInfo = {
  _id: string;
  ingredients: Array<string>;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
};

export interface IOrders  {
  orders: Array<TOrderInfo>;
  total: number;
  totalToday: number;
};

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

export interface IUserResponse {
  status: string;
  success: boolean;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface IResponse {
  status: any;
  success: boolean;
  message: string | undefined;
}

export type TTokenRefreshResponse = Omit<IUserResponse, "user">;
