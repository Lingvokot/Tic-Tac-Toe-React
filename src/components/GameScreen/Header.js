import React from "react";

const Header = ({text}) => {
  var headerStyle = {
    width: "100%",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0.5rem"
  };

  return (
    <header style={headerStyle}>
      {text}
    </header>
  );
};

Header.propTypes = {
  text: React.PropTypes.string
}

export default Header;
