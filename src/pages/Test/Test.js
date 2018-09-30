import React from 'react';
import './index.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'text1111',
            num: 0
        }
    }
    handleAdd=()=>{
        this.setState({
            num: this.state.num + 1
        })
    }
    render(){
        return (
            <div className="contain">
                <p>{ this.state.text }</p>
                <p> { this.state.num }</p>
                <Button onClick={this.handleAdd()}>点击一下</Button>
            </div>
        )
    }
}