import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import CounterStore from '../store/CounterStore';
import * as Actions from'../Actions';
import store from '../store/Store';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {

    constructor(props) {
        console.log('enter constructor: ' + props.caption);
        super(props);
        //this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        //this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState(){
        return{
            value:store.getState()[this.props.caption]
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps ' + this.props.caption)

    }
    componentWillMount =()=>{
        console.log('enter componentWillMount ' + this.props.caption);
        //CounterStore.removeChangeListener(this.onChange);
    }
    //已经加载
    componentDidMount=()=>{
        console.log('进入 已经加载' + this.props.caption);
        //CounterStore.addChangeListener(this.onChange);
        store.subscribe(this.onChange);
    }
    //将要拆卸
    componentWillUnmount() {
        console.log('进入 将要拆卸' + this.props.caption);
        store.unsubscribe(this.onChange);
    }

    onClickIncrementButton=()=> {
        //this.updateCount(true);
       store.dispatch(Actions.increment(this.props.caption));
    }

    onClickDecrementButton=()=> {
        //this.updateCount(false);
        store.dispatch(Actions.decrement(this.props.caption));

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    onChange =()=>{
        //const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState(this.getOwnState());
    };

    /*updateCount=(AddorMin)=> {
        const preValue = this.state.count;
        const newValue = AddorMin ? preValue + 1 : preValue - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue, preValue);
    }*/

    render() {
        console.log('开始 渲染 ' + this.props.caption);
        const {caption} = this.props;
        const {value} = this.state.value;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <span>{caption} count: {value}</span>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

/*Counter.defaultProps = {
    initValue: 0,
    //onUpdate: f=>f
};*/

export default Counter;