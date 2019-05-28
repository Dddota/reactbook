import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import CounterStore from '../store/CounterStore';
import * as Actions from'../Actions';
import store from '../store/Store';

const buttonStyle = {
    margin: '10px'
};

/*class Counter extends Component {
    render() {
        const {caption,onClickIncrementButton,onClickDecrementButton,value}=this.props;
        console.log('开始 渲染 ' + this.props.caption);
       //const {caption} = this.props;
       // const value = this.state.value;

        return (
            <div>
                <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
                <span>{caption} count: {value}</span>
                <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
            </div>
        );
    }
}*/

function Counter(props) {
    const {caption,onClickIncrementButton,onClickDecrementButton,value}=props;
    return(
        <div>
            <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
            <span>{caption} count: {value}</span>
            <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
        </div>
    );
}

class CounterContainer extends Component{
    constructor(props) {
        console.log('进入构造器: ' + props.caption);
        super(props);
        //this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        //this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = this.getOwnState();
    }
    getOwnState =()=>{
        return{
            value:store.getState()[this.props.caption]
        }
    };

    onClickIncrementButton=()=> {
        //this.updateCount(true);
        store.dispatch(Actions.increment(this.props.caption));
    };

    onClickDecrementButton=()=> {
        //this.updateCount(false);
        store.dispatch(Actions.decrement(this.props.caption));

    };

    onChange =()=>{
        //const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState(this.getOwnState());
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('需要更新' + this.props.caption);
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    componentWillMount(){
        console.log('将要加载 ' + this.props.caption);
        //CounterStore.removeChangeListener(this.onChange);
    }
    //已经加载
    componentDidMount(){
        console.log('已经加载' + this.props.caption);
        //CounterStore.addChangeListener(this.onChange);
        store.subscribe(this.onChange);
    }
    //将要拆卸
    componentWillUnmount() {
        console.log('进入 将要拆卸' + this.props.caption);
        store.unsubscribe(this.onChange);
    }






    render() {
        return (
            <Counter caption ={this.props.caption}
                onClickIncrementButton={this.onClickIncrementButton}
                onClickDecrementButton={this.onClickDecrementButton}
                     value ={this.state.value} />
        );
    }

}

/*Counter.defaultProps = {
    initValue: 0,
    //onUpdate: f=>f
};*/

export default CounterContainer;