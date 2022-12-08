import PropTypes from "prop-types";
const URL_API = "https://norma.nomoreparties.space/api/ingredients";
const ORDER_DATA = {
  _id: "034536",
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

export { IngredientPropType, URL_API, ORDER_DATA };