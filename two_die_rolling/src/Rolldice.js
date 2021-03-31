import React, { Component } from 'react'
import Die from './Die'
import './Rolldice.css';

export default class Rolldice extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 die1:Math.floor(Math.random()*6)+1,
			 die2:Math.floor(Math.random()*6)+1,
			 rolling:false
		}
		
	}
	Roll=(e)=>{
		this.setState({
			die1:Math.floor(Math.random()*6)+1,
			die2:Math.floor(Math.random()*6)+1,
			rolling:true
	   })
	   setTimeout(()=>{
		   this.setState({rolling:false})
	   },1000)
	}
	render() {
		return (
			<div className="Rolldice">
				<div className="Rolldice-container">				
					<Die rolling={this.state.rolling} num={this.state.die1}/>
					<Die rolling={this.state.rolling} num={this.state.die2}/>
				</div>  
				<button onClick={this.Roll} disabled={this.state.rolling}>
					{this.state.rolling?'Rolling...':'Roll Dice'}
				</button>
			</div>
		)
	}
}
