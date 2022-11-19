import React from "react";
import AppHeader from "../header/header";
import AppMain from "../main/main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppMain />
      </React.Fragment>
    );
  }
}

export default App;
