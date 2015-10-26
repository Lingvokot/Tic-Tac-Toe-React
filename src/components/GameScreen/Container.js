import React from "react";

const Container = React.createClass({
  containerStyle: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "60rem",
    margin: "auto"
  },

  render () {
    return (
      <div style={this.containerStyle}>
        {this.props.children}
      </div>
    );
  }
});

export default Container;
