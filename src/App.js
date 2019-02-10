import React, { Component } from 'react';
// import MyComponent from './MyComponent';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
// import PropTypes from 'prop-types';
import './App.css';

function getRandomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = ()=>{
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        {/* <MyComponent name="React" age={4} />

        <EventPractice />

        <ValidationSample />

        <ScrollBox ref={(ref)=>this.scrollBox=ref} />
        <button onClick={()=>this.scrollBox.scrollToBottom()}>to Bottom</button>

        <IterationSample /> */}

        <LifeCycleSample color={this.state.color} />
        <button onClick={this.handleClick}>random color</button>
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: 'default name'
// }
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

export default App;
