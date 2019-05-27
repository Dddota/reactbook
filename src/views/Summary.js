import React, { Component } from 'react';
//import SummaryStore from '../store/SummaryStore';
import store from '../store/Store';

class Summary extends Component{
    constructor(props){
        super(props);
        this.state=this.getOwnState();
    }

    getOwnState(){
        const state=store.getState();
        let sum = 0;
        for(const key in state){
            if (state.hasOwnProperty(key)){
                sum +=state[key];
            }
        }
        return {sum:sum};
    }
    componentWillMount() {
        //SummaryStore.removeChangeListener(this.onUpdate);
    }

    componentDidMount() {
        //SummaryStore.addChangeListener(this.onUpdate);
        store.subscribe(this.onUpdate);
    }

    componentWillUnmount() {
        store.unsubscribe(this.getOwnState);
    }

    onUpdate=()=>{
        this.setState(this.getOwnState());
    };
    render() {
        return(
            <div>总点击数 {this.state.sum}</div>
        )
    }
}
export default Summary;