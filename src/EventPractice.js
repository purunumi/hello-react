import React, { Component } from 'react';

class EventPractice extends Component {
    // state = {
    //     message: ''
    // }
    // handleChange = (e)=>{
    //     this.setState({
    //         message: e.target.value
    //     })
    // }
    // handleClick = ()=>{
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     })
    // }

    constructor(props){
        super(props);
        this.state = {
            username: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        this.setState({
            // message: e.target.value
            [e.target.name]: e.target.value
        });
    }
    handleClick(){
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }
    handleKeyPress(e){
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>event practice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="input username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="input anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    // onChange={
                    //     (e)=>{
                    //         this.setState({
                    //             message: e.target.value
                    //         });
                    //         // console.log(e.target.value);
                    //     }
                    // }
                />
                <button
                    onClick={this.handleClick}
                    // onClick={
                    //     ()=>{
                    //         alert(this.state.message);
                    //         this.setState({
                    //             message: ''
                    //         })
                    //     }
                    // }
                >confirm</button>
            </div>
        );
    }
}

export default EventPractice;