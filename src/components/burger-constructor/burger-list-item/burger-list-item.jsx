import PropTypes from "prop-types";
import { COMPONENT_TYPES, IngredientPropType } from "../../../utils/data";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./burger-list-item.module.css";
import { useDispatch } from "react-redux";
import { REMOVE_ITEM_FROM_CHOICE } from "../../../services/actions/selectedItems";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
export default function BurgerListItem({ item, position, iconVis, index, moveListItem }) {
  const visibility = iconVis ? itemStyles.dragIcon_visible : itemStyles.dragIcon_hidden;
  const dispatch = useDispatch();

  const hadleRemoveBtn = (e) => {
    e.preventDefault();
    dispatch({
      type: REMOVE_ITEM_FROM_CHOICE,
      chosenItem: item,
    });
  };

  const [{ isDrag }, drag] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;
      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = drag(drop(ref));

  return (
    <li
      {...(item.type !== COMPONENT_TYPES.buns && {
        ref: dragDropRef,
      })}
      className={itemStyles.item}
      style={isDrag ? { opacity: 0.5 } : { opacity: 1 }}
    >
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
  index: PropTypes.number,
  moveListItem: PropTypes.func,
};
