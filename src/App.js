import React, { Component } from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" age={4} />
        <EventPractice />
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
