import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
  render() {
    return (
      <header>
        <p className="text text_type_main-default">
          The quick brown fox jumps over the lazy dog.
        </p>
      </header>
    );
  }
}

export default AppHeader;
