import PropTypes from "prop-types";
import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";

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
    <ul className={burgCompStyles.primaryList}>
      {first}
      <ul className={burgCompStyles.secondaryList}>{components}</ul>
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
