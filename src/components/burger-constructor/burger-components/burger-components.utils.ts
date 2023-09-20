import bunImage from "../../../assets/images/default-bun.png";
import { COMPONENT_TYPES } from "../../../utils/data";

export const GET_RANDOM = () => {
  return `${Math.floor(Math.random() * 999999999999999)}`;
};

export const EMPTY_BUN = {
  type: COMPONENT_TYPES.buns,
  name: "Выберите булку",
  price: 0,
  image: bunImage,
  _id: "placeholder",
  uniqId: GET_RANDOM(),
};



// export const findElement = (target: IIngredient, items: IIngredient[]) => {
//   return items.find((item: IIngredient) => item._id === target.id);
// };

// export const findElement = (target: IDropItem, items: IIngredient[]) => {
//   return items.find((item: IIngredient) => item._id === target.id);
// };
