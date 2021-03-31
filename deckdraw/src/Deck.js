import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card';
export default class Deck extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 deck:null,
			 imageUrl:[],
			 cardFinish:false
		}
		this.getCard=this.getCard.bind(this);
	}
	
	async componentDidMount(){
		let data= await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/")
		this.setState({deck:data.data})
	}
	async getCard(){
		try {
			let cardData= await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`)
			if((cardData.data.cards[0].success)){
				throw new Error("No Card remaining");
			} 
			this.setState(old=>(
				{imageUrl:
				[...old.imageUrl,
					{
						id:cardData.data.cards[0].code,
						image:cardData.data.cards[0].image,
						name:`${cardData.data.cards[0].value} of ${cardData.data.cards[0].suit}`
					}
				]}
			))
			
		}catch(err){
			this.setState({cardFinish:true});
		}
	
	
	}
	render() {
		let result=""
		if (this.state.imageUrl.length>0){
			result= this.state.imageUrl.map(d => <Card image={d.image} name={d.name} key={d.id}/>)
		} 
		return (
			<div>
				<h1>Card Dealer</h1>
				{ !this.state.cardFinish &&  <button onClick={this.getCard}>Click Me</button>}
				{ this.state.cardFinish && <h2>No Card Remaining</h2>}
				<div style={{margin:"80px"}}>
				{result}
				</div>
			</div>
		)
	}
}
