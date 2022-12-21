import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";
import { COMPONENT_TYPES } from "../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_TAB } from "../../../../services/actions/tabs";

export default function Tabs() {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((store) => store.tabs);

  const handleClick = (element) => {
    dispatch({
      type: SET_ACTIVE_TAB,
      currentTab: element,
    });
    document
      .querySelector(`#${element}`)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <div className={tabsStyles.tabs}>
      <Tab
        value={COMPONENT_TYPES.buns}
        active={activeTab === COMPONENT_TYPES.buns}
        onClick={handleClick}
      >
        Булки
      </Tab>
      <Tab
        value={COMPONENT_TYPES.sauces}
        active={activeTab === COMPONENT_TYPES.sauces}
        onClick={handleClick}
      >
        Соусы
      </Tab>
      <Tab
        value={COMPONENT_TYPES.mains}
        active={activeTab === COMPONENT_TYPES.mains}
        onClick={handleClick}
      >
        Начинки
      </Tab>
    </div>
  );
}
