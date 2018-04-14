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
  render() {
    return (
      <div className="App">
       <NavB />
        <p className="">
         Hello
        </p>
        <Home name="Yang" logged={false}/>
        </div>
    );
  }
}

export default App;
