import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'default name'
    }
    // static propTypes = {
    //     name: PropTypes.string
    // }

    // state = {
    //     number: 0
    // }
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <div className="wrap-practice">
                <h1 className="title-h1">component practice</h1>
                <p>hello, my name is {this.props.name}.</p>
                <p>I'm {this.props.age} years old.</p>
                <p>number: {this.state.number}</p>
                <button onClick={()=>{
                    this.setState({
                        number: this.state.number +1
                    })
                }}>add</button>
            </div>
        );
    }
}

export default MyComponent;
