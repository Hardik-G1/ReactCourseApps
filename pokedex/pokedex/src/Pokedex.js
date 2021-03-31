import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
class Pokedex extends Component{
	render(){ 
		let title;
		if (this.props.isWinner){
			title=<h1 className="Pokedex-winner">Winning hand</h1>;
		}
		else{
			title=<h1 className="Pokedex-loser">Losing hand</h1>;
		}
		return(
			<div className="Pokedex">
				{title}
				<p>Total EXP: {this.props.texp}</p>
				
				
				<div className="Pokedex-cards">
					{this.props.pokemon.map(pokemon => <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.exp} />)}
				</div>
			</div>
			
		)
	}
}
export default Pokedex;