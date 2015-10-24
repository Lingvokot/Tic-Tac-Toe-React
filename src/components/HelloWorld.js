/*
        Тут пример какого-нибудь компонента
*/

import React from "react";

const HelloWorld = React.createClass({
  PropTypes: {
    text: React.PropTypes.string
  },

  render () {
    return <h2>I'm HelloWorld component
      with custom text passed via props: {this.props.text}</h2>
  }
});

export default HelloWorld;
