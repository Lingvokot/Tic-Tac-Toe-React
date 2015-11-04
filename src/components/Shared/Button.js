import React from "react";

const Button = React.createClass({
  PropTypes: {
    text: React.PropTypes.string,
    useWrapper: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
  },

  buttonStyle: {
    fontSize: "1.5rem",
    boxShadow: "0.2rem 0.2rem 0.2rem rgba(0,0,0,0.8)"
  },

  buttonWithWrapper: function () {
    return (
      <ButtonWrapper>
        <button onClick={this.props.onClick}
            style={this.buttonStyle}
        >
          {this.props.text}
        </button>
      </ButtonWrapper>
    );
  },

  buttonWithoutWrapper: function () {
    return (
      <button onClick={this.props.onClick}
          style={this.buttonStyle}
      >
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

const ButtonWrapper = React.createClass({
  wrapperStyle: {
    margin: "1rem auto"
  },

  render () {
    return (
      <div style={this.wrapperStyle}>
        {this.props.children}
      </div>
    );
  }
});

export default Button;
