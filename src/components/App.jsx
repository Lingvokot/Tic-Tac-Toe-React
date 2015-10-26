/*
        Главный компонент приложения
 */
import React from "react";
import MenuScreen from "./MenuScreen/MenuScreen.js";

const App = React.createClass({
  render () {
    return (
      <MenuScreen />
    );
  }
});

export default App;
