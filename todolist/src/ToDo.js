import React, { Component } from 'react'
import './ToDo.css'
export default class ToDo extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 isEditing:false,
			 task:this.props.task
		}
	}
	handleChange=(evt)=>{
		this.setState({
			[evt.target.name]:[evt.target.value]
		})
		
	}
	handleClick=(evt)=>{
		this.props.deletetodo(this.props.id)
	}
	handleUpdateform=(evt)=>{
		this.setState({isEditing:true})
	}
	handleupdate=(evt)=>{
		evt.preventDefault();
		this.props.update(this.props.id,this.state.task)
		this.setState({
			isEditing:false
			
	   })
	}
	handleTask=(evt)=>{
		this.props.tasktoggle(this.props.id)
	}
	render() {
		let result;
		if (this.state.isEditing){
			result=(
				<div className='form'>
				<form className='Todo-edit-form' onSubmit={this.handleupdate}>
					<input
					value={this.state.task}
					name='task'
					onChange={this.handleChange}
					>
					</input>
					<button>Done</button>
				</form>
				</div>
			)
		}else{
			result=(
				<div>
				<li  className={this.props.done ? "Todo completed":'Todo'} onClick={this.handleTask}>
				{this.props.task}
				<div className='Todo-buttons'>
					<button onClick={this.handleUpdateform}>
			  			<i class='fas fa-pen' />
					</button>
					<button onClick={this.handleClick}>
			  			<i class='fas fa-trash' />
					</button>
				</div>
				</li>
				
			</div>
			)
		}
		return (
			result
		  
		)
	}
}
