import React from 'react';

class Form extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  componentWillMount(){
    console.log('Form component is mounting');
    //this.setState({ userInput: 'test input!'});
  }
  componentDidMount(){
    console.log('Form component has mounted. WOO');
  }
  handleChange(e){
    this.setState({ userInput: e.target.value })
  }
  render() {
      return (
        <div>
          <input
          type="text"
          onChange={this.handleChange}
          value={this.state.userInput}/>
           <h3>{this.state.userInput}</h3>
        </div>
      )
    }
  }

export default Form;
