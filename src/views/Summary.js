import React  from 'react';
import {connect} from 'react-redux';

function Summary({value}) {
    return(
        <div>总点击数 {value}</div>
    );
}

function mapStateToProps(state) {
    let sum = 0;
    for(const key in state){
        if (state.hasOwnProperty(key)){
            sum +=state[key];
        }
    }
    return {value:sum};
}

export default connect(mapStateToProps)(Summary);
/*

class SummaryContainer extends Component{
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
        return(<Summary sum={this.state.sum} />
        )
    }
}
export default SummaryContainer;*/
