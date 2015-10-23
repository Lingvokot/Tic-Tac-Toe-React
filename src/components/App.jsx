/*
        Главный компонент приложения
 */
import React from "react";
import MenuScreen from "./MenuScreen/MenuScreen.jsx";

const App = React.createClass({
  render () {
    return (
      <MenuScreen />
    );
  }
});

export default App;
