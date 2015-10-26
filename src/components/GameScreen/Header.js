import React from "react";

const Header = (props) => {
  var headerStyle = {
    width: "100%",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0.5rem"
  };

  return (
    <header style={headerStyle}>
      {props.text}
    </header>
  );
};

export default Header;
