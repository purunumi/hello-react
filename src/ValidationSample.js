import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
            clicked: false,
            validated: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        this.setState({
            password: e.target.value
        });
    }
    handleButtonClick(){
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }
    handleKeyPress(e){
        if(e.key==='Enter'){
            this.handleButtonClick();
        }
    }

    render() {
        return (
            <div className="wrap-practice">
                <h1 className="title-h1">ref practice</h1>
                <input
                    type="password"
                    ref={(ref)=>{this.input=ref}}
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>validate</button>
            </div>
        );
    }
}

export default ValidationSample;