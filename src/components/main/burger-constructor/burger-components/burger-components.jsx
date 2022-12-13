import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";
import { ChoiceContext } from "../../../../services/appContext";
import { useContext } from "react";
import bunImage from "../../../../assets/images/default-bun.png";

const EMPTY_BUN = {
  name: "Выберите булку",
  price: 0,
  image: bunImage,
};

export default function BurgerComponents() {
  const chosenItems = useContext(ChoiceContext);
  let firstBun;
  let lastBun;
  const components = [];

  chosenItems.forEach((element, index) => {
    switch (element.type) {
      case "bun":
        firstBun = (
          <BurgerListItem
            item={element}
            position="top"
            iconVis={false}
            key={element._id + index}
          />
        );
        lastBun = (
          <BurgerListItem
            item={element}
            position="bottom"
            iconVis={false}
            key={element._id + index + "bottom"}
          />
        );
        break;
      default:
        components.push(
          <BurgerListItem
            item={element}
            position="default"
            iconVis={true}
            key={element._id + index}
          />
        );
    }
  });
  return (
    <ul className={burgCompStyles.primaryList}>
      {firstBun ? (
        firstBun
      ) : (
        <BurgerListItem
          item={EMPTY_BUN}
          position="top"
          iconVis={false}
          key={Math.floor(Math.random() * 999999999999999)}
        />
      )}
      <ul className={burgCompStyles.secondaryList}>{components.length > 0 && components}</ul>
      {lastBun ? (
        lastBun
      ) : (
        <BurgerListItem
          item={EMPTY_BUN}
          position="bottom"
          iconVis={false}
          key={Math.floor(Math.random() * 999999999999999)}
        />
      )}
    </ul>
  );
}
