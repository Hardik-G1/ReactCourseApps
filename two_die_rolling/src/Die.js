import React, { Component } from 'react'
import './Die.css';
export default class Die extends Component {
	render() {
		const dieclass=
		{
			1:'one g',
			2:'two r',
			3:'three a',
			4:'four d',
			5:'five b',
			6:'six c'
		};
		return (
				<i className={"Die fas fa-dice-"+dieclass[this.props.num]+" "+(this.props.rolling && 'shaking')} />
		)
	}
}
