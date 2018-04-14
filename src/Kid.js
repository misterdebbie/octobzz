import React from 'react';

class Kid extends React.Component {
  render() {
      return (
       <h3>hello, my name is {this.props.name}</h3>
      )
    }
  }

export default Kid;
