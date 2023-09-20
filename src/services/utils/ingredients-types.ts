export interface IMainIngedientData {
  image: string;
  name: string;
  price: number;
  type: string;
  _id: string;
	uniqId: string;
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