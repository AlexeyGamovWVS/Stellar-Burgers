import PropTypes from "prop-types";
import { IngredientPropType } from "../../../utils/data";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./burger-list-item.module.css";
import { useDispatch } from "react-redux";
import { REMOVE_ITEM_FROM_CHOICE } from "../../../../services/actions/chosenIngredients";
export default function BurgerListItem({ item, position, iconVis }) {
  const visibility = iconVis
    ? itemStyles.dragIcon_visible
    : itemStyles.dragIcon_hidden;
	const dispatch = useDispatch();

	const hadleRemoveBtn = (e) => {
		e.preventDefault();
		dispatch({
			type: REMOVE_ITEM_FROM_CHOICE,
			chosenItem: item,
		})
	}
  return (
    <li className={itemStyles.item}>
      <div className={`${visibility} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
				handleClose={hadleRemoveBtn}
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
