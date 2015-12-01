import React from "react";

const Container = ({children}) => {
  let containerStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    width: "30rem",
    height: "36rem",
    margin: "auto",
    backgroundColor: "#304467"
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
