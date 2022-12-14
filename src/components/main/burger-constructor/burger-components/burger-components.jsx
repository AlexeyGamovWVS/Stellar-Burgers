import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";
import { ChoiceContext } from "../../../../services/appContext";
import { useContext, useMemo } from "react";
import bunImage from "../../../../assets/images/default-bun.png";

const EMPTY_BUN = {
  name: "Выберите булку",
  price: 0,
  image: bunImage,
};

const GET_RANDOM = () => {
  return `${Math.floor(Math.random() * 999999999999999)}`;
};

export default function BurgerComponents() {
  const chosenItems = useContext(ChoiceContext);
  const ingredients = useMemo(
    () => chosenItems.filter((item) => item.type !== "bun"),
    [chosenItems]
  );
	//надо ли для булки использовать useMemo?...
  const bun = useMemo(
    () => chosenItems.find((item) => item.type === "bun"),
    [chosenItems]
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
        {ingredients.map((item, index) => (
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
