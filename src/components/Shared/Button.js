import React from "react";

class Button extends React.Component {

  buttonWithWrapper () {
    return (
      <ButtonWrapper>
        <button onClick={this.props.onClick}
            style={buttonStyle}
        >
          {this.props.text}
        </button>
      </ButtonWrapper>
    );
  }

  buttonWithoutWrapper () {
    return (
      <button onClick={this.props.onClick}
          style={buttonStyle}
      >
        {this.props.text}
      </button>
    );
  }

  render () {
    return (
        this.props.useWrapper ?
        this.buttonWithWrapper() :
        this.buttonWithoutWrapper()
      );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  useWrapper: React.PropTypes.string
};

let buttonStyle = {
  fontSize: "1.5rem",
  boxShadow: "0.2rem 0.2rem 0.2rem rgba(0,0,0,0.8)"
};

const ButtonWrapper = (props) => {
  let wrapperStyle = {
    margin: "1rem auto"
  }

  return (
    <div style={wrapperStyle}>
      {props.children}
    </div>
  );
}

export default Button;
