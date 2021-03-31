import React, { Component } from 'react'
import Balls from './Balls'
import './Lottery.css'

export default class Lottery extends Component {
	static defaultProps={
		title: 'LOTTO',
		numBalls: 6,
		maxNum: 40
	}
	constructor(props) {
		super(props)
		this.state = {
			balls: Array.from({length:this.props.numBalls})
		}
	}
	lotto(){
		this.setState(currState=>({
			balls: currState.balls.map(oldball=>(Math.floor(Math.random()*this.props.maxNum)+1))
		})
		)}
		
	
	handleClick=(e)=>{
		this.lotto();
	}
	render() {

		return (
			<div className="Lottery">
				<h2>{this.props.title}</h2>
				{this.state.balls.map(d => (<Balls num={d}/>))}
				<button onClick={this.handleClick}>Lotto!</button>
			</div>
		)
	}
}
