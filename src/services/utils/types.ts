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
