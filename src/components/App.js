import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddTodoForm from '../containers/AddTodoForm';
import VisibleTodoList from '../containers/DisplayTodoList';
import Filter from './Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddTodoForm/>
        <VisibleTodoList/>
        <Filter/>
      </div>
    );
  }
}

export default App;
