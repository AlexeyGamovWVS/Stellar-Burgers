import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";

const tabStates = {
  buns: "buns",
  sauces: "sauces",
  mains: "mains",
};

export default function Tabs() {
  const [current, setCurrent] = React.useState(tabStates.buns);
  return (
    <div className={tabsStyles.tabs}>
      <Tab
        value={tabStates.buns}
        active={current === tabStates.buns}
        onClick={setCurrent}
      >
        Булки
      </Tab>
      <Tab
        value={tabStates.sauces}
        active={current === tabStates.sauces}
        onClick={setCurrent}
      >
        Соусы
      </Tab>
      <Tab
        value={tabStates.mains}
        active={current === tabStates.mains}
        onClick={setCurrent}
      >
        Начинки
      </Tab>
    </div>
  );
}
