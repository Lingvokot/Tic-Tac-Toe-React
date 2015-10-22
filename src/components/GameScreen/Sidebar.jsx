import React from "react";

const Sidebar = React.createClass({
  sidebarStyle: {
    flex: 1,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "15rem",
    margin: "0.5rem"
  },

  render () {
    return (
      <div style={this.sidebarStyle}>
        {this.props.children}
      </div>
    );
  }
});

export default Sidebar;
