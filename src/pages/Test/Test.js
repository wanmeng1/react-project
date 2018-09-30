import React from 'react';
import './index.css';
import { Button, Input } from 'antd';
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
                <Button onClick={() => this.handleAdd()}>点击一下</Button>
                <Input placeholder="啊哈哈"/>
            </div>
        )
    }
}