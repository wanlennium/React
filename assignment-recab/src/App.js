import React, { Component } from 'react';
import './App.css';

const Input = (props) => {
  return <input onChange={props.action}/>;
};

const Person = (props) => {
return <h2>{props.name}</h2>

};

class App extends Component {
  state = {
    name: "Syizwan",
    username: "Wanlennium",
    user: {},
  };

  render() {
    return (
      <div className="App">
        <Input action={this.onChangeHandler} value={this.state.username}/>
        <Person name="Syizwan"/>
        <Person name={this.state.name}/>
        <Person name={this.state.username}/>
        <Person name={this.state.user.name} action={this.onClickHandler}/>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
  


  fetchUser = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => user);
  };

  onChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  componentDidMount() {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchUser(userId).then((user) => this.setState({ user: user }));
  }

  onClickHandler = () => {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchUser(userId).then((user) => this.setState({ user: user }));
  };
}

export default App;



