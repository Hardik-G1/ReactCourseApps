import React, { Component } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './JokeList.css'
import Jokes from './Jokes';
export default class JokesList extends Component {
	static defaultProps={
		Initial_jok:10
	}
	constructor(props) {
		super(props);
		this.state = {
			 jokes:JSON.parse(window.localStorage.getItem("jokes")|| "[]"),
			 loading:false
		}
		this.seenJokes=new Set(this.state.jokes.map(t=>t.text))
		this.getJokes=this.getJokes.bind(this);
		this.handleClick=this.handleClick.bind(this);

	}
	componentDidMount(){
		if(this.state.jokes.length===0) this.getJokes();	
	}
	async getJokes(){
		try{
			let result=[];
		while(result.length<this.props.Initial_jok){
			let joke=await axios("https://icanhazdadjoke.com/",
			{headers : {Accept : "application/json"}
		})
		if(!this.seenJokes.has(joke.data.joke)){
			result.push({id: uuidv4(),text:joke.data.joke,votes:0})
		}
			
		}
		this.setState(old=>({loading:false,jokes:[...old.jokes,...result]}),
			()=>window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes))
		);	
		}
		catch(e){
			alert(e);
			this.setState({loading:false})
		}
		
		
	}
	handlevotes(id,delta){
		this.setState(old=>
			({jokes: old.jokes.map(d=>d.id===id ? {...d,votes: d.votes+delta}: d )}),
			()=>window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes))
			)
	}
	handleClick(){
		this.setState({loading:true},this.getJokes);
	}
	render() {
		if (this.state.loading) {
			return (
			  <div className='JokeList-spinner'>
				<i className='far fa-8x fa-laugh fa-spin' />
				<h1 className='JokeList-title'>Loading...</h1>
			  </div>
			);
		  }
		return (
			<div className="JokeList">
				<div className="JokeList-sidebar">
					<h1 className="JokeList-title">
						<span>Dad</span> Jokes					
					</h1>
				<img alt="Smiley" src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          		<button className='JokeList-getmore' onClick={this.handleClick}>
            	Fetch Jokes
          		</button>
				</div>
				<div className="JokeList-jokes scrollbar" id="style-7">
				{this.state.jokes.map(d=><Jokes 
				key={d.id}
				votes={d.votes}
				text={d.text}
				upvote={()=>this.handlevotes(d.id,1)}
				downvote={()=>this.handlevotes(d.id,-1)}
				/>
				)}
				</div>
			</div>
		)
	}
}
