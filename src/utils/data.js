import PropTypes from "prop-types";
const URL_API = "https://norma.nomoreparties.space/api";
const COMPONENT_TYPES = {
  buns: "bun",
  sauces: "sauce",
  mains: "main",
};

const IngredientPropType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

// Registered user
// AlekseI
// alex@test.ru
// 127562
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZiNzhkMDkwNWZkMDAxYjYyOTU1YiIsImlhdCI6MTY4MTMwNzUzMywiZXhwIjoxNjgxMzA4NzMzfQ.hdcFEUqf09MUNBTANjZO515VEzGvqzAabUkkqlzeMwU
// a408be5336c95efdf14a5852d23e458e75ba83cb824240968ca594201343983b7d85dbe52174f8ec
export { IngredientPropType, URL_API, COMPONENT_TYPES };
