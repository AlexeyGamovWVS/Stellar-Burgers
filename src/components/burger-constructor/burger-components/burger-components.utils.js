import bunImage from "../../../assets/images/default-bun.png";

export const EMPTY_BUN = {
  name: "Выберите булку",
  price: 0,
  image: bunImage,
};

export const GET_RANDOM = () => {
  return `${Math.floor(Math.random() * 999999999999999)}`;
};

export const findElement = (target, items) => {
  return items.find((item) => item._id === target.id);
};
