import React, { Component } from 'react'

export default class NewBoxForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 width:'',
			 height:'',
			 color:''
		}
	}
	handleSubmit=(evt)=>{
		evt.preventDefault();
		this.props.addBox(this.state);
		this.setState({
			width:'',
			height:'',
			color:''
	   })
	}
	handleChange=(evt)=>{
		this.setState({[evt.target.name]:[evt.target.value]})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="width">Width</label>
					<input name="width" id="width" 
					value={this.state.width}
					onChange={this.handleChange}/>

					<label htmlFor="height">Height</label>
					<input name="height" id="height" 
					value={this.state.height}
					onChange={this.handleChange}/>
					<label htmlFor="color">Color</label>
					<input name="color" id="color" 
					value={this.state.color}
					onChange={this.handleChange}/>
					<button>Create</button>
				</form>
			</div>
		)
	}
}
