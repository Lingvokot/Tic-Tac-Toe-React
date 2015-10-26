import React from "react";

const MiddleContainer = React.createClass({
  middleContainerStyle: {
    flex: 2,
    margin: "0.5rem"
  },

  render () {
    return (
      <div style={this.middleContainerStyle}>
        {this.props.children}
      </div>
    );
  }
});

export default MiddleContainer;
