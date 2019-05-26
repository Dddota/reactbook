import React, { Component } from 'react';
import SummaryStore from '../store/SummaryStore';

class Summary extends Component{
    constructor(props){
        super(props);
        this.state={
            sum:SummaryStore.getSummary()
        }
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onUpdate);
    }
    componentWillMount() {
        SummaryStore.removeChangeListener(this.onUpdate);
    }

    onUpdate=()=>{
        this.setState({
            sum:SummaryStore.getSummary()
        })
    };
    render() {
        return(
            <div>总点击数 {this.state.sum}</div>
        )
    }

}
export default Summary;