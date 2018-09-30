import React from 'react';
// import ReactDom from 'react-dom';
import './index.css'
import { Button} from 'antd';
class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            text: 'react哈哈哈',
            num: 0
        };
    }
    handleAdd1 = () =>{
        this.setState({
            num: this.state.num +1
        })
    }
    handleAdd2(){
        this.setState({
            num: this.state.num +1
        })
    }
    render(){
        return(
            <div className="contain">
                <p>一段话： { this.state.text }</p>
                <p>{ this.state.num }</p>
                <Button onClick={this.handleAdd1}>点击一下</Button>
                <Button onClick={this.handleAdd2.bind(this)}>点击一下</Button>
            </div>
        )
    }
}
export default Demo;
