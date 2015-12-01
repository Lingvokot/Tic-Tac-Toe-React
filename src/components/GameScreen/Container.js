import React from "react";

const Container = ({children}) => {
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
      {children}
    </div>
  );
};

export default Container;
