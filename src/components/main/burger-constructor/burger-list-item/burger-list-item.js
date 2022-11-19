import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./burger-list-item.module.css";
export default function BurgerListItem({ item, position, iconVis }) {
  const visibility = iconVis
    ? itemStyles.dragIcon_visible
    : itemStyles.dragIcon_hidden;
  return (
    <li className={itemStyles.item}>
      <div className={`${visibility} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        type={position}
        isLocked={position !== "default"}
        text={
          item.name +
          (position === "top" ? " (верх)" : "") +
          (position === "bottom" ? " (низ)" : "")
        }
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  );
}

BurgerListItem.propTypes = {
  item: PropTypes.shape({
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
  }),
  position: PropTypes.string,
  iconVis: PropTypes.string,
};
