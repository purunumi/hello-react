import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = 'Are you awesome?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      width: Math.round(Math.random()*300)+50,
      height: Math.round(Math.random()*300)+50,
      transition:'all'
    };
    return (
      <div className="my-div">
        <h1>hello react!</h1>
        <h2>{text}</h2>
        {condition && 'shows it, please'}
        <div style={style}></div>
      </div>
    );
  }
}

export default App;
