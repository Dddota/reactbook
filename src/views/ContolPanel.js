import React,{ Component} from 'react';
import Counter from './Counter';
import Summary from './Summary';


class ControlPanel extends Component{

/*
    constructor(props){
        super(props);
        this.initValues=[0,10,20];
        const  initSum  = this.initValues.reduce((a,b)=>a+b,0);
        this.state={
            sum:initSum
        }
    }
     onCounterUpdate=(newValue,preValue)=>{
        const valueChange = newValue-preValue;
        this.setState({sum : this.state.sum + valueChange});
     }
*/


    render() {
        console.log('进入父组件渲染');
        return (
            <div>
                <Counter caption ="First"  />
                <Counter caption ="Second" />
                <Counter caption ="Third"  />
                <hr/>
                <Summary />
            </div>
        );
    }
}
export  default ControlPanel;