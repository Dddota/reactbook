import React,{ Component} from 'react';
import Counter from './Counter';


class ControlPanel extends Component{

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


    render() {
        console.log('进入父组件渲染');
        return (
            <div>
                <button onClick={()=>this.forceUpdate()}>点我强制更新</button>
                <Counter caption ="First"  onUpdate = {this.onCounterUpdate}  />
                <Counter caption ="Second" onUpdate = {this.onCounterUpdate} initValue={this.initValues[1]} />
                <Counter caption ="Thrid"  onUpdate = {this.onCounterUpdate}  initValue={this.initValues[2]} />
                <br/>
                <span>总点击数 {this.state.sum}</span>
            </div>
        );
    }
}
export  default ControlPanel;