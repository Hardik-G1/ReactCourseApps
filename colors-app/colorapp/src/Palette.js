import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar';
import Palettefooter from './Palette-footer';
import styles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";

 class Palette extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 level:500,
			 format:"hex"
		}
	}
	changelevel=(newlevel)=>{
		this.setState({
			level:newlevel
		})
	}
	handleformatchange=(val)=>{
		this.setState({format:val})
	}
	render() {
		const { classes } = this.props;
		const colorBoxes=this.props.palette.colors[this.state.level].map(d=><ColorBox
			 key={d.id} 
			 background={d[this.state.format]} 
			 name={d.name}
			 moreurl={`/palette/${this.props.palette.id}/${d.id}`}
			 showingFullPalette
			 />)
		return (
			<div className={classes.Palette}>
				<Navbar showSlider level={this.state.level} handleChange={this.handleformatchange} changelevel={this.changelevel}/>
				<div className={classes.colors}>
					{colorBoxes}
				</div>
				<Palettefooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
			</div>
		)
	}
}
export default withStyles(styles)(Palette);