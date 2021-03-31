import React, { Component } from 'react'
import './Ball.css';
export default class Balls extends Component {
	render() {
		return (
			<div className="Ball">
				{this.props.num}
			</div>
		)
	}
}
