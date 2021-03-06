import React, { Component } from 'react'

import MiniPalette from './MiniPalette';
import styles from "./styles/PaletteListStyles";
import {withStyles} from "@material-ui/styles"
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	goToPalette(id){
		this.props.history.push(`/palette/${id}`)
	}
	render() {
		const {classes,list}=this.props;
		return (
			<div className={classes.root}>
			<div className={classes.container}>
			  <nav className={classes.nav}>
				<h1>React Colors</h1>
				<Link to="/palette/new">Create Palette</Link>
			  </nav>
			  <div className={classes.palettes}>
				{list.map(palette => (
				  <MiniPalette {...palette} handleClick={()=>this.goToPalette(palette.id)}/>
				))}
			  </div>
			</div>
		  </div>
		)
	}
}
export default withStyles(styles)(PaletteList);