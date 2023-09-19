import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import { getIngredientCards, currentRow } from "./ingredients.utils";
import { COMPONENT_TYPES } from "../../../utils/data";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../..";

interface IIngredientsList {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  rowsRefObj: {
    bunsRef: React.RefObject<HTMLDivElement>;
    saucesRef: React.RefObject<HTMLDivElement>;
    mainsRef: React.RefObject<HTMLDivElement>;
  };
}

export default function Ingredients({ activeTab, setActiveTab, rowsRefObj }: IIngredientsList) {
  const items = useAppSelector((store) => store.allItems.items);
  const location = useLocation();
  const state = location.state;
  const separatedData = getIngredientCards(items, state, location);

  const scrollHandler = (e: React.SyntheticEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    const newRow = currentRow(target);
    newRow && newRow !== activeTab && setActiveTab(newRow);
  };

  return (
    <div onScroll={scrollHandler} className={`${ingredStyles.rowsContainer} mt-10`}>
      <IngredientRow rowRef={rowsRefObj.bunsRef} id={COMPONENT_TYPES.buns} title="Булки">
        {separatedData.buns}
      </IngredientRow>
      <IngredientRow rowRef={rowsRefObj.saucesRef} id={COMPONENT_TYPES.sauces} title="Соусы">
        {separatedData.sauces}
      </IngredientRow>
      <IngredientRow rowRef={rowsRefObj.mainsRef} id={COMPONENT_TYPES.mains} title="Начинки">
        {separatedData.mains}
      </IngredientRow>
    </div>
  );
}