import React from "react";

const Button = React.createClass({
  PropTypes: {
    text: React.PropTypes.string,
    useWrapper: React.PropTypes.string
  },

  wrapperStyle: {
    margin: "1rem auto"
  },

  buttonStyle: {
    fontSize: "1.5rem",
    boxShadow: "0.2rem 0.2rem 0.2rem rgba(0,0,0,0.8)"
  },

  buttonWithWrapper: function () {
    return (
      <div style={this.wrapperStyle}>
        <button style={this.buttonStyle}>
          {this.props.text}
        </button>
      </div>
    );
  },

  buttonWithoutWrapper: function () {
    return (
      <button style={this.buttonStyle}>
        {this.props.text}
      </button>
    );
  },


  render () {
    return (
        this.props.useWrapper ?
        this.buttonWithWrapper() : 
        this.buttonWithoutWrapper()
      );
  }
});

export default Button;
