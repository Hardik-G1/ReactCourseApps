import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokegame from './Pokegame';

class App extends Component{
	render(){
		return(
			<div>
				
				<Pokegame/>
			</div>
		)
	}
}
ReactDOM.render(<App/>,document.getElementById("root"));