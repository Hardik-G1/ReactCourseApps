import React, { Component } from 'react'
import Coin from './Coin'

export default class Coinflipper extends Component {
	static defaultProps={
		data:[
			{ imgSrc:"https://th.bing.com/th/id/OIP.jK3GE7yWtxrcBLk202CzlAHaHa?pid=Api&rs=1",face:"heads"},
			{ imgSrc:"https://th.bing.com/th/id/OIP.VcTGzC7M3OPlgIxMAEZTfAAAAA?pid=Api&rs=1",face:"tails"} 
		]
	};
	constructor(props) {
		super(props)
		this.state = {
			 currCoin: null,
			 flips:0,
			 nhead:0,
			 ntail:0
		}
	}
	
	flip(){
		let random=this.props.data[Math.floor(Math.random()*this.props.data.length)]
		this.setState(currState=>{
			return {
			currCoin: random,
			flips:currState.flips+1,
			nhead: currState.nhead+(random.face==="heads" ? 1 : 0),
			ntail: currState.ntail+(random.face==="tails" ? 1 : 0)
			};
		});
	}
	handleCick=(e)=>{
		this.flip();
	}
	
	render() {
		return (
			<div>
				<h2>Let's flip a coin</h2>
				{this.state.currCoin && <Coin data={this.state.currCoin}/>}
				<button onClick={this.handleCick}>Flip</button>
				<p>Out of {this.state.flips} there are {this.state.nhead} heads and {this.state.ntail} tails.</p>
			</div>
		)
	}
}
