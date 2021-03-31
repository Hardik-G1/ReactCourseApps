import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';

export default class Boxlist extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 boxes:[
				]
		}
	}
	addBoxes=(item)=>{
		let newitem={...item,id:uuidv4()};
		this.setState(olst=>({
			boxes:[...olst.boxes,newitem]
		}))
	}
	deleteBox(id){
		this.setState({
			boxes: this.state.boxes.filter(d=>(d.id!==id))
		})
	}
	render() {
		return (
			<div className="Boxlist">
				<NewBoxForm addBox={this.addBoxes}/>
				{this.state.boxes.map(d=>(<Box delete={()=>this.deleteBox(d.id)} key={d.id} id={d.id} data={d}/>))}
			</div>
		)
	}
}
