/*
        Главный компонент приложения
 */
import React from "react";
import GameScreen from "./GameScreen/GameScreen.jsx";

const App = React.createClass({
  render () {
    return (
      <GameScreen />
    );
  }
});

export default App;
