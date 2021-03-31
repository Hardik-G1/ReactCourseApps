import React, { Component } from 'react'
import './Box.css'
import { getsingleColor } from './helper';
export default class Box extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 color: this.props.color
		}
	}
	change(){
		let randomColor;
		do{
			randomColor={backgroundColor:getsingleColor()}
		}while(this.state.color===randomColor);
		this.setState({color:randomColor});
	}
	handleClick=()=>{
		this.change()
	}
	render() {
		return (
			<div style={this.state.color} onClick={this.handleClick} className="Box"></div>
		)
	}
}
