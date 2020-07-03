import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}

    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was Clicked')
    //  Dont do this: this.state.persons[0].name = 'Maxinilian';
    this.setState({
      persons:[
        { name: 'Maxmilian', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}

      ]
     })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React App!!</h1>
        <p> This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
