import React from "react";

const MiddleContainer = (props) => {
  var middleContainerStyle = {
    flex: 2,
    margin: "0.5rem"
  };

  return (
    <div style={middleContainerStyle}>
      {props.children}
    </div>
  );

};

export default MiddleContainer;
