import React from 'react';

class Button extends React.Component {
  render() {

      return (
       <button onClick={this.props.onClick}>
       {this.props.text}
       </button>
      )
    }
  }
Button.defaultProps = {text: 'boop the button'};





export default Button;
