import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";
import { COMPONENT_TYPES } from "../../../utils/data";

export default function Tabs() {
  const [current, setCurrent] = React.useState(COMPONENT_TYPES.buns);
  const handleClick = (element) => {
    setCurrent(element);
    document
      .querySelector(`#${element}`)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <div className={tabsStyles.tabs}>
      <Tab
        value={COMPONENT_TYPES.buns}
        active={current === COMPONENT_TYPES.buns}
        onClick={handleClick}
      >
        Булки
      </Tab>
      <Tab
        value={COMPONENT_TYPES.sauces}
        active={current === COMPONENT_TYPES.sauces}
        onClick={handleClick}
      >
        Соусы
      </Tab>
      <Tab
        value={COMPONENT_TYPES.mains}
        active={current === COMPONENT_TYPES.mains}
        onClick={handleClick}
      >
        Начинки
      </Tab>
    </div>
  );
}
