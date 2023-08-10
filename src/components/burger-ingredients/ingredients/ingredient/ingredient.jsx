import itemStyles from "./ingredient.module.css";
import PropTypes from "prop-types";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { COMPONENT_TYPES } from "../../../../utils/data";
export default function Ingredient({ name, price, image, onOpen, id, type }) {
  const { selectedItems, selectedBun } = useSelector((store) => store.selectedItems);
  const count = useMemo(() => {
    return selectedItems.reduce((acc, item) => (item._id === id ? ++acc : acc), 0);
  }, [id, selectedItems]);

  const bunCount = useMemo(() => {
    return selectedBun !== null ? (selectedBun._id === id ? 2 : 0) : 0;
  }, [id, selectedBun]);

  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: { id, type },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <li
      ref={drag}
      className={isDrag ? `${itemStyles.item} ${itemStyles.item_drag}` : `${itemStyles.item}`}
      onClick={onOpen}
      id={id}
    >
      <Counter count={type === COMPONENT_TYPES.buns ? bunCount : count} size="default" />
      <img className={`ml-4 mr-4`} src={image} alt={name} />
      <div className={itemStyles.price}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  );
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onOpen: PropTypes.func,
  id: PropTypes.string.isRequired,
};
