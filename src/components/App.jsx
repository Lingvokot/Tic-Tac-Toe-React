/*
        Главный компонент приложения
 */
import React from "react";

import HelloWorld from "./HelloWorld.jsx";

const App = React.createClass({
  render () {
    return (
      <div>
        <h1><b>App</b> component</h1>
        <hr />
        <HelloWorld text="'Hello, props'" />
      </div>
      );
  }
});

export default App;
