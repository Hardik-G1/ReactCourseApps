import React, { Component } from 'react'

export default class Box extends Component {
	render() {
		return (
			<div>
			<div style={{width:this.props.data.width,height:this.props.data.height,backgroundColor:this.props.data.color}}>
			</div>
			<button onClick={this.props.delete}>Delete</button>
			</div>
		)
	}
}
