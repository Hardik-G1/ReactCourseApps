import React, { Component } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import "./ToDolist.css";

export default class TodoList extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 todos:[{task:"hello",id:"1",done:false}]
		}
	}
	tasktoggle=(id)=>{
		let updateItem=this.state.todos.map(t=>{
			if(t.id===id){
				return {...t,done:!t.done}
			}else{
				return t
			}
		})
		this.setState({todos:updateItem})
	}
	update=(id,task)=>{
		let updateItem=this.state.todos.map(t=>{
			if(t.id===id){
				return {...t,task:task}
			}else{
				return t
			}
		})
		this.setState({todos:updateItem})
	}
	deleteTodo=(id)=>{
		this.setState({
			todos:this.state.todos.filter(d=>(d.id!==id))
		})
	}
	create=(item)=>{
		if((item.task).length){
		item={...item,id:uuidv4(),done:false}
		this.setState(old=>({
			todos:[...old.todos,item]
		}))
	}
	}
	render() {
		return (
			<div className='TodoList'>
				<h1>Todo List</h1>
				<ToDoForm create={this.create}/>
				<ul>
					{this.state.todos.map(t=>(<ToDo 
					className='todo-list'
					update={this.update}
					deletetodo={this.deleteTodo}
					key={t.id}
					id={t.id}
					task={t.task}
					done={t.done}
					tasktoggle={this.tasktoggle}/>))}
				</ul>
			</div>
		)
	}
}
