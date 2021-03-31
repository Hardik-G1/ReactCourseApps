import React, { Component } from 'react'
import './ToDoForm.css'
export default class ToDoForm extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 task:''
		}
	}
	formSubmit=(evt)=>{
		evt.preventDefault();
		this.props.create(this.state);
		this.setState({task:''});
	}
	handlechange=(evt)=>{
		this.setState({
			[evt.target.name]:evt.target.value
		})
	}
	render() {
		return (
			<div>
				<form className='NewTodoForm' onSubmit={this.formSubmit}>
					<label htmlFor="task"/>
					<input value={this.state.task}
					name="task"
					id="task"
					onChange={this.handlechange}
					/>
					<button>Create new Task!</button>
				</form>
			</div>
		)
	}
}
