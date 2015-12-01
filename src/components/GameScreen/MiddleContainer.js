import React from "react";

const MiddleContainer = ({children}) => {
  var middleContainerStyle = {
    flex: 2,
    margin: "0.5rem"
  };

  return (
    <div style={middleContainerStyle}>
      {children}
    </div>
  );

};

export default MiddleContainer;
