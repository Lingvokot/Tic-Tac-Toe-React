import React from "react";

const Container = (props) => {
  var containerStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "60rem",
    margin: "auto"
  };

  return (
    <div style={containerStyle}>
      {props.children}
    </div>
  );

};

export default Container;
