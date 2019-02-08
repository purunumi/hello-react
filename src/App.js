import React, { Component } from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" age={4} />

        <EventPractice />

        <ValidationSample />

        <ScrollBox ref={(ref)=>this.scrollBox=ref} />
        <button onClick={()=>this.scrollBox.scrollToBottom()}>to Bottom</button>

        <IterationSample />
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: 'default name'
// }
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
