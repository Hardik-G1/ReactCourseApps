import React, { Component } from 'react'

export default class Random extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 number:1
		}
		this.changeOnCLick=this.changeOnCLick.bind(this);
	}
	changeOnCLick(e){
		let rand= Math.floor(Math.random()*10)
		this.setState({number:rand})
	}
	render() {
		let iswin =false;
		if (this.state.number===7){
			iswin=true
		}
		return (
			<div className="Random">
				<h1>{this.state.number}</h1>
				{iswin?'winner' :<button onClick={this.changeOnCLick}>CLick me</button>}
			</div>
		)
	}
}
