import React from "react";

const Container = (props) => {
  var containerStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    width: "30rem",
    height: "36rem",
    margin: "auto",
    backgroundColor: "#304467"
  };

  return (
    <div style={containerStyle}>
      {props.children}
    </div>
  );
};

export default Container;
