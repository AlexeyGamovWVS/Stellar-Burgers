import itemStyles from "./ingredient.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import { COMPONENT_TYPES } from "../../../../utils/data";
import { IMainIngedientData } from "../../../../services/utils/types";
import { useAppSelector } from "../../../..";

export default function Ingredient({ name, price, image, _id, type }: IMainIngedientData) {
  const { selectedItems, selectedBun } = useAppSelector((store) => store.selectedItems);
  const count = useMemo(() => {
    return selectedItems.reduce((acc, item) => (item._id === _id ? ++acc : acc), 0);
  }, [_id, selectedItems]);

  const bunCount = useMemo(() => {
    return selectedBun !== null ? (selectedBun._id === _id ? 2 : 0) : 0;
  }, [_id, selectedBun]);

  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: { name, price, image, _id, type },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <li
      ref={drag}
      className={isDrag ? `${itemStyles.item} ${itemStyles.item_drag}` : `${itemStyles.item}`}
    >
      <Counter count={type === COMPONENT_TYPES.buns ? bunCount : count} size="default" />
      <img className={`ml-4 mr-4`} src={image} alt={name} />
      <div className={itemStyles.price}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  );
}
