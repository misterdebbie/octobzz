import React from 'react';

class Shade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: 'sunny',
      color: "#e0d86b"
    };
    this.toggleShade = this.toggleShade.bind(this);
  }

  toggleShade(){
    const newShade = this.state.weather == 'sunny' ?
    'cloudy' : 'sunny';
    this.setState({weather: newShade });
  }

  render(){
    return (
      <div style={{background: this.state.color}}>
       <h3> it is so {this.state.weather}!</h3>
       <button onClick={this.toggleShade}>
       mother nature fluxxxx
       </button>
      </div>
    );
  }
}

export default Shade;
