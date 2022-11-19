import React from "react";
import PropTypes from "prop-types";
import constructurStyles from "./burger-constructor.module.css";
import data from "../../utils/data";
import PriceBox from "./price-box/price-box";
import BurgerListItem from "./burger-list-item/burger-list-item";

const bun = data.find((item) => item.name === "Краторная булка N-200i");
const sauce = data.find(
  (item) => item.name === "Соус традиционный галактический"
);
const meat = data.find(
  (item) => item.name === "Мясо бессмертных моллюсков Protostomia"
);
const tree = data.find((item) => item.name === "Плоды Фалленианского дерева");
const tors = data.find((item) => item.name === "Хрустящие минеральные кольца");

const yourChoice = [bun, sauce, meat, tree, tors, tors, bun];
let sum;
yourChoice.forEach((item) => (sum += item.price));

export default class BurgerConstructor extends React.Component {
  render() {
    return (
      <div className={`pt-25 ${constructurStyles.constructor}`}>
        <BurgerComponents data={yourChoice} />
        <PriceBox data={yourChoice} />
      </div>
    );
  }
}

function BurgerComponents({ data }) {
  let first;
  let last;
  const components = [];
  data.forEach((element, index, arr) => {
    switch (index) {
      case 0:
        first = (
          <BurgerListItem
            item={element}
            position="top"
            iconVis="hidden"
            key={element._id + index}
          />
        );
        break;
      case arr.length - 1:
        last = (
          <BurgerListItem
            item={element}
            position="bottom"
            iconVis="hidden"
            key={element._id + index}
          />
        );
        break;
      default:
        components.push(
          <BurgerListItem
            item={element}
            position="default"
            iconVis="visible"
            key={element._id + index}
          />
        );
    }
  });
  return (
    <ul className={constructurStyles.primaryList}>
      {first}
      <ul className={constructurStyles.secondaryList}>{components}</ul>
      {last}
    </ul>
  );
}

BurgerComponents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};