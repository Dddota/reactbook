import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterStore from '../store/CounterStore';
import * as Actions from'../Actions';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {

    constructor(props) {
        console.log('enter constructor: ' + props.caption);
        super(props);
        //this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        //this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps ' + this.props.caption)

    }
    componentWillMount =()=>{
        console.log('enter componentWillMount ' + this.props.caption);
        CounterStore.removeChangeListener(this.onChange);

    }

    componentDidMount=()=>{
        console.log('enter componentDidMount ' + this.props.caption);
        CounterStore.addChangeListener(this.onChange);

    }

    onClickIncrementButton=()=> {
        //this.updateCount(true);
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton=()=> {
        //this.updateCount(false);
        Actions.decrement(this.props.caption);

    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    onChange =()=>{
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count:newCount});
    }

    /*updateCount=(AddorMin)=> {
        const preValue = this.state.count;
        const newValue = AddorMin ? preValue + 1 : preValue - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue, preValue);
    }*/

    render() {
        console.log('enter render ' + this.props.caption);
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <span>{caption} count: {this.state.count}</span>
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