import PropTypes from "prop-types";
import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";
import { IngredientPropType } from "../../../utils/data";

export default function BurgerComponents({ data }) {
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
            iconVis={false}
            key={element._id + index}
          />
        );
        break;
      case arr.length - 1:
        last = (
          <BurgerListItem
            item={element}
            position="bottom"
            iconVis={false}
            key={element._id + index}
          />
        );
        break;
      default:
        components.push(
          <BurgerListItem
            item={element}
            position="default"
            iconVis={true}
            key={element._id + index}
          />
        );
    }
  });
  return (
    <ul className={burgCompStyles.primaryList}>
      {first}
      <ul className={burgCompStyles.secondaryList}>{components}</ul>
      {last}
    </ul>
  );
}

BurgerComponents.propTypes = {
  data: PropTypes.arrayOf(IngredientPropType).isRequired,
};
