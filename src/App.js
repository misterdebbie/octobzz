import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import NavB from './Nav';
import All from './All';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Edits from './Edits';
import Mood from './Mood';
import Rtw from './Rtw';
import Button from './Button';
import Shade from './Shade';
import Kid from './Kid';
import Form from './Form';
import './App.css';
/*
<Switch>
<Route exact path="/home" component={Home} />
<Route exact path="/all" component={All} />
<Route exact path="/contact" component={Contact} />
<Route exact path="/edits" component={Edits} />
<Route exact path="/mood" component={Mood} />
<Route exact path="/rtw" component={Rtw} />
<Route exact path="/about" component={About} />
</Switch>
*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'pink',
      name: 'Regina'
    };
    console.log(this.state);
  }

  handleClick(){
    let message = 'the button has been BOOOOPED!';
    console.log(message);
    alert(message);
  }

  render() {
    return (
      <div className="App">
       <NavB />
        <p className="">
         Hello, my favorite color is {this.state.color}
        </p>
        <Home name="Yang" logged={false}/>
        <Button onClick={this.handleClick} text="hello"/>
        <Shade />
        <Kid name={this.state.name}/>
        <Form />
        </div>
    );
  }
}

export default App;
