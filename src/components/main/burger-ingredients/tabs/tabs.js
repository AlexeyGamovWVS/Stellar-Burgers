import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";
export default function Tabs() {
  const [current, setCurrent] = React.useState("buns");
  return (
    <div className={tabsStyles.tabs}>
      <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}
