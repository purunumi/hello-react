import React, { Component } from 'react';

class IterationSample extends Component {
    constructor(props){
        super(props);
        this.state = {
            names: ['snowman', 'ice', 'snow', 'wind'],
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInsert = this.handleInsert.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        });
    }
    handleInsert(){
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        })
    }
    handleRemove(index){
        const {names} = this.state;

        // this.setState({
        //     names: [
        //         ...names.slice(0, index),
        //         ...names.slice(index + 1, names.length)
        //     ]
        // });
        this.setState({
            names: names.filter((item, i) => i !== index)
        })
    }

    render() {
        // const names = ['snowman', 'ice', 'snow', 'wind'];
        const nameList = this.state.names.map(
            (name, index) => (
                <li
                    key={index}
                    onDoubleClick={()=>this.handleRemove(index)}
                >{name}</li>
            )
        );

        return (
            <div className="wrap-practice">
                <h1 className="title-h1">repeat practice</h1>
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleInsert}>add</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;