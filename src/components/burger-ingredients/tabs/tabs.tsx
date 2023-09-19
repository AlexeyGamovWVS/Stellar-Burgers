import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./tabs.module.css";
import { COMPONENT_TYPES } from "../../../utils/data";
import PropTypes from "prop-types";

interface ITabs {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  rowsRefObj: {
    bunsRef: React.RefObject<HTMLDivElement>;
    saucesRef: React.RefObject<HTMLDivElement>;
    mainsRef: React.RefObject<HTMLDivElement>;
  };
}

const scrollTo = (scrollRef: React.RefObject<HTMLDivElement>): void =>
  scrollRef.current?.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });

export default function Tabs({ activeTab, setActiveTab, rowsRefObj }: ITabs) {
  const handleClick = (element: string) => {
    switch (element) {
      case COMPONENT_TYPES.buns:
        setActiveTab(COMPONENT_TYPES.buns);
        scrollTo(rowsRefObj.bunsRef);
        break;
      case COMPONENT_TYPES.sauces:
        setActiveTab(COMPONENT_TYPES.sauces);
        scrollTo(rowsRefObj.saucesRef);
        break;
      case COMPONENT_TYPES.mains:
        setActiveTab(COMPONENT_TYPES.mains);
        scrollTo(rowsRefObj.mainsRef);
        break;
      default:
        break;
    }
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

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  rowsRefObj: PropTypes.object.isRequired,
};
