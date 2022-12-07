import PropTypes from "prop-types";
import {IngredientPropType} from "../../../utils/data";
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
  item: IngredientPropType.isRequired,
  position: PropTypes.string.isRequired,
  iconVis: PropTypes.bool.isRequired,
};
