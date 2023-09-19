import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";
import { useCallback } from "react";
import { COMPONENT_TYPES } from "../../../utils/data";
import { GET_RANDOM, EMPTY_BUN } from "./burger-components.utils";
import { useDrop } from "react-dnd";
import {
  sortComponents,
  addBunAction,
  removeBunAction,
  addItemAction,
} from "../../../services/actions/selectedItems";
import { useAppDispatch, useAppSelector } from "../../..";
import { IMainIngedientData } from "../../../services/utils/ingredients-types";

export default function BurgerComponents() {
  const dispatch = useAppDispatch();
  const { selectedItems, selectedBun } = useAppSelector((store) => store.selectedItems);

  const [{ isHover }, drop] = useDrop<IMainIngedientData, unknown, { isHover: boolean }>({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),

    drop(item: IMainIngedientData) {
      item && item.type === COMPONENT_TYPES.buns
        ? !selectedBun
          ? dispatch(addBunAction(item))
          : replaceBun(item)
        : dispatch(addItemAction(item));
    },
  });

  const replaceBun = (bun: IMainIngedientData) => {
    if (bun !== selectedBun) {
      dispatch(removeBunAction());
      dispatch(addBunAction(bun));
    }
  };

  const moveListItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(sortComponents([...selectedItems], dragIndex, hoverIndex));
    },
    [dispatch, selectedItems]
  );

  return (
    <ul
      ref={drop}
      className={burgCompStyles.primaryList}
      {...(isHover && {
        style: {
          boxShadow: "4px 4px 8px 0px rgba(255, 255, 255, 0.2)",
          borderRadius: "60px",
        },
      })}
    >
      <BurgerListItem
        item={selectedBun ? selectedBun : EMPTY_BUN}
        position="top"
        iconVis={false}
        key={selectedBun ? selectedBun._id : GET_RANDOM()}
      />

      <ul className={burgCompStyles.secondaryList}>
        {selectedItems.length > 0 &&
          selectedItems.map((item, index) => (
            <BurgerListItem
              item={item}
              iconVis={true}
              key={item._id + index}
              index={index}
              moveListItem={moveListItem}
            />
          ))}
      </ul>

      <BurgerListItem
        item={selectedBun ? selectedBun : EMPTY_BUN}
        position="bottom"
        iconVis={false}
        key={selectedBun ? selectedBun._id + GET_RANDOM() : GET_RANDOM()}
      />
    </ul>
  );
}
