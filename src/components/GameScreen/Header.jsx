import React from "react";

const Header = React.createClass({
  PropTypes: {
    text: React.PropTypes.string
  },

  headerStyle: {
    width: "100%",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0.5rem"
  },

  render () {
    return (
      <header style={this.headerStyle}>{this.props.text}</header>
    );
  }
});

export default Header;
