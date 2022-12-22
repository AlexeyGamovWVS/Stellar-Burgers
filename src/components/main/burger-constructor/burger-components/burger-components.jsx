import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";
import { useMemo } from "react";
import { COMPONENT_TYPES } from "../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { GET_RANDOM, EMPTY_BUN, findElement } from "./burger-components.utils";
import { useDrag, useDrop } from "react-dnd";
import {
  ADD_ITEM_TO_CHOICE,
	REMOVE_ITEM_FROM_CHOICE,
} from "../../../../services/actions/chosenIngredients";

export default function BurgerComponents() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.allItems);
  const { bunIsSelected, selectedItems } = useSelector(
    (store) => store.selectedItems
  );
	
  const replaceBun = (target, index) => {
    if (!findElement(target, selectedItems)) {
      dispatch({
        type: REMOVE_ITEM_FROM_CHOICE,
        chosenItem: selectedItems.find(
          (item) => item.type === COMPONENT_TYPES.buns
        ),
        isBun: true,
      });
      dispatch({
        type: ADD_ITEM_TO_CHOICE,
        chosenItem: { ...findElement(target, items), index },
        isBun: true,
      });
    }
  };

  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),

    drop(item) {
      const target = { ...findElement(item, items), index: GET_RANDOM() };
      target && target.type === COMPONENT_TYPES.buns
        ? !bunIsSelected
          ? dispatch({
              type: ADD_ITEM_TO_CHOICE,
              chosenItem: target,
              isBun: true,
            })
          : replaceBun(item, target.index)
        : dispatch({
            type: ADD_ITEM_TO_CHOICE,
            chosenItem: target,
            isBun: false,
          });
    },
  });

  const ingredients = useMemo(
    () => selectedItems.filter((item) => item.type !== COMPONENT_TYPES.buns),
    [selectedItems]
  );

  const bun = useMemo(
    () => selectedItems.find((item) => item.type === COMPONENT_TYPES.buns),
    [selectedItems]
  );

  return (
    <ul
      ref={drop}
      className={burgCompStyles.primaryList}
      style={
        isHover
          ? {
              boxShadow: "4px 4px 8px 0px rgba(255, 255, 255, 0.2)",
              borderRadius: "60px",
            }
          : null
      }
    >
      <BurgerListItem
        item={bun ? bun : EMPTY_BUN}
        position="top"
        iconVis={false}
        key={bun ? bun._id : GET_RANDOM()}
      />

      <ul className={burgCompStyles.secondaryList}>
        {ingredients.length > 0 &&
          ingredients.map((item, index) => (
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
