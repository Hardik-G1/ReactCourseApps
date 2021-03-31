import React, { Component } from 'react';
import './Pokecard.css';
const POKE="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
class Pokecard extends Component{
	render(){
		var id=(this.props.id).toString()
		if (id.length<3){
			id="0".repeat(3-id.length)+id
		}
		let imgSrc=`${POKE}${id}.png`
		return(
			<div className="Pokecard">
				<h3 className="Pokecard-data">{this.props.name}</h3><img src={imgSrc} alt={this.props.name}/>
				<div className="Pokecard-data" >Type:{this.props.type}</div>
				<div className="Pokecard-data" >EXP:{this.props.exp}</div>
			</div>
		)
	}
}
export default Pokecard;