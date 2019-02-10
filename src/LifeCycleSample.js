import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }
        return null;
    }

    componentDidMout(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number%10 !== 4;
    }

    componentWillunmount(){
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        }

        return (
            <div className="wrap-practice">
                <h1 className="title-h1">life cycle practice</h1>
                <h2 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h2>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>add</button>
            </div>
        );
    }
}

export default LifeCycleSample;