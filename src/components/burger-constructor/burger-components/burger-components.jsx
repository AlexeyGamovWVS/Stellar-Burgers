import BurgerListItem from "../burger-list-item/burger-list-item";
import burgCompStyles from "./burger-components.module.css";
import { useCallback } from "react";
import { COMPONENT_TYPES } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_RANDOM,
  EMPTY_BUN,
  findElement,
} from "./burger-components.utils";
import { useDrop } from "react-dnd";
import {
  ADD_ITEM_TO_CHOICE,
  ADD_BUN_TO_CHOICE,
  REMOVE_BUN_FROM_CHOICE,
  sortComponents,
} from "../../../services/actions/selectedItems";

export default function BurgerComponents() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.allItems);
  const { selectedItems, selectedBun } = useSelector(
    (store) => store.selectedItems
  );

  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),

    drop(item) {
      const target = {
        ...findElement(item, items),
        index: GET_RANDOM(),
      };
      target && target.type === COMPONENT_TYPES.buns
        ? !selectedBun
          ? dispatch({
              type: ADD_BUN_TO_CHOICE,
              chosenItem: target,
            })
          : replaceBun(item, target.index)
        : dispatch({
            type: ADD_ITEM_TO_CHOICE,
            chosenItem: target,
            isBun: false,
          });
    },
  });

  const replaceBun = (target, index) => {
    if (target !== selectedBun) {
      dispatch({
        type: REMOVE_BUN_FROM_CHOICE,
      });
      dispatch({
        type: ADD_BUN_TO_CHOICE,
        chosenItem: { ...findElement(target, items), index },
      });
    }
  };

  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch(
        sortComponents([...selectedItems], dragIndex, hoverIndex)
      );
    },
    [dispatch, selectedItems]
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
              position="default"
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
        key={
          selectedBun ? selectedBun._id + GET_RANDOM() : GET_RANDOM()
        }
      />
    </ul>
  );
}
