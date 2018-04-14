import React from 'react';
import ReactDOM from 'react-router-dom';

class Home extends React.Component {
  render() {
    console.log(this.props);
    if (!this.props.logged){
      return <div>
               <p>you need to sign into your account</p>
            </div>
    } else {
      return <div>
              <h3>greetings {this.props.name}!</h3>
              <h3>hello from the home component</h3>
            </div>
    }
  }
}

export default Home;
