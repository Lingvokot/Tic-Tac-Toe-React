import React from "react";

const Sidebar = ({children}) => {
  var sidebarStyle = {
    flex: 1,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "15rem",
    margin: "0.5rem"
  };

  return (
    <div style={sidebarStyle}>
      {children}
    </div>
  );
};

export default Sidebar;
