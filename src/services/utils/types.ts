//burger-constructor
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
  // const orderdatafromserv = {
  //   _id: "65047c836d2997001caa8f15",
  //   ingredients: [
  //     "643d69a5c3f7b9001cfa093c",
  //     "643d69a5c3f7b9001cfa0945",
  //     "643d69a5c3f7b9001cfa0941",
  //     "643d69a5c3f7b9001cfa0944",
  //   ],
  //   owner: "64c7a30682e277001bfa5c93",
  //   status: "done",
  //   name: "Антарианский био-марсианский традиционный-галактический краторный бургер",
  //   createdAt: "2023-09-15T15:47:15.773Z",
  //   updatedAt: "2023-09-15T15:47:15.993Z",
  //   number: 20743,
  //   __v: 0,
  // };

// wsSocket
export interface IOrder {
	ingredients: string[];
	_id: string;
	status: string;
	number: string;
	createdAt: string;
	updatedAt: string;
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
