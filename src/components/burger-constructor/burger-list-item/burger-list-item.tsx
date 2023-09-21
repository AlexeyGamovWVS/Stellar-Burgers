import { COMPONENT_TYPES } from "../../../utils/data";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./burger-list-item.module.css";
import { removeItemAction } from "../../../services/actions/selectedItems";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { IListItemInterface } from "../../../services/utils/types";
import { useAppDispatch } from "../../..";

export default function BurgerListItem({
  item,
  position,
  iconVis,
  index,
  moveListItem,
}: IListItemInterface) {
  const visibility = iconVis ? itemStyles.dragIcon_visible : itemStyles.dragIcon_hidden;
  const dispatch = useAppDispatch();

  const hadleRemoveBtn = () => {
    dispatch(removeItemAction(item));
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
    hover: (item: { index: number }, monitor) => {
      if (!ref.current || !index) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();

      if (clientOffset && hoverBoundingRect) {
        const hoverActualY = hoverBoundingRect && clientOffset.y - hoverBoundingRect.top;
        const hoverMiddleY =
          hoverBoundingRect && (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
        if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;
        moveListItem!(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  const ref = useRef<HTMLLIElement>(null);
  drag(drop(ref));

  return (
    <li
      {...(item.type !== COMPONENT_TYPES.buns && {
        ref: ref,
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
        isLocked={position !== undefined}
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
