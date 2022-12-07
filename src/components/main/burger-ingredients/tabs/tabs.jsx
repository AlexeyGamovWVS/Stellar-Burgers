import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";

const TAB_STATUSES = {
  buns: "buns",
  sauces: "sauces",
  mains: "mains",
};

export default function Tabs() {
  const [current, setCurrent] = React.useState(TAB_STATUSES.buns);
  return (
    <div className={tabsStyles.tabs}>
      <Tab
        value={TAB_STATUSES.buns}
        active={current === TAB_STATUSES.buns}
        onClick={setCurrent}
      >
        Булки
      </Tab>
      <Tab
        value={TAB_STATUSES.sauces}
        active={current === TAB_STATUSES.sauces}
        onClick={setCurrent}
      >
        Соусы
      </Tab>
      <Tab
        value={TAB_STATUSES.mains}
        active={current === TAB_STATUSES.mains}
        onClick={setCurrent}
      >
        Начинки
      </Tab>
    </div>
  );
}
