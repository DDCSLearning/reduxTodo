import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddTodo/>
        <TodoList/>
        <Filter/>
      </div>
    );
  }
}

export default App;
