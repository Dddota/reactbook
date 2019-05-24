import React,{ Component} from 'react';
class ClickContuer extends Component{
    constructor(props){
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this .state = {count:0 };
    }
    onClickButton(){
        this.setState({count : this.state.count + 1});
    }
    render() {
        const counterStyle={
            margin:'16px'
        }
        return(
            <div style={counterStyle}>
                <div><button onClick={this.onClickButton}>+</button> Click Count :{ this.state.count}</div>

            </div>
        )
    }
}

export  default ClickContuer;
