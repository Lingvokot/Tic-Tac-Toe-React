import React from "react";

const Container = React.createClass({
  containerStyle: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "30rem",
    height: "36rem",
    margin: "auto",
    backgroundColor: "#304467"
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
