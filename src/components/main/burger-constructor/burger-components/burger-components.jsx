import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";
import { useMemo } from "react";
import bunImage from "../../../../assets/images/default-bun.png";
import { COMPONENT_TYPES } from "../../../utils/data";
import { useSelector } from "react-redux";

const EMPTY_BUN = {
  name: "Выберите булку",
  price: 0,
  image: bunImage,
};

const GET_RANDOM = () => {
  return `${Math.floor(Math.random() * 999999999999999)}`;
};

export default function BurgerComponents() {
	const {selectedItems} = useSelector(store => store.selectedItems);

  const ingredients = useMemo(
    () => selectedItems.filter((item) => item.type !== COMPONENT_TYPES.buns),
    [selectedItems]
  );

	const bun = useMemo(
    () => selectedItems.find((item) => item.type === COMPONENT_TYPES.buns),
    [selectedItems]
  );
	
  return (
    <ul className={burgCompStyles.primaryList}>
      <BurgerListItem
        item={bun ? bun : EMPTY_BUN}
        position="top"
        iconVis={false}
        key={bun ? bun._id : GET_RANDOM()}
      />

      <ul className={burgCompStyles.secondaryList}>
        {ingredients.length > 0 && ingredients.map((item, index) => (
          <BurgerListItem
            item={item}
            position="default"
            iconVis={true}
            key={item._id + index}
          />
        ))}
      </ul>

      <BurgerListItem
        item={bun ? bun : EMPTY_BUN}
        position="bottom"
        iconVis={false}
        key={bun ? bun._id + GET_RANDOM() : GET_RANDOM()}
      />
    </ul>
  );
}
