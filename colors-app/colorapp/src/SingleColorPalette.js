import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ColorBox from "./ColorBox";
import Navbar from './Navbar';
import Palettefooter from './Palette-footer';
import styles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";
class SingleColorPalette extends Component {
	constructor(props) {
		super(props)
		this.state={format:"hex"}
		this._shades=this.generateShades(this.props.palette,this.props.colorId)
	}
	generateShades(palette,id){
		let shades=[]
		let allColors = palette.colors;

    	for (let key in allColors) {
      	shades = shades.concat(
        	allColors[key].filter(color => color.id === id)
      	);
    	}
		return shades.slice(1)
	}
	handleformatchange=(val)=>{
		this.setState({format:val})
	}
	render() {
		const { classes } = this.props;
		const colorBoxes = this._shades.map(color => (
			<ColorBox
			  key={color.name}
			  name={color.name}
			  background={color[this.state.format]}
			  showingFullPalette={false}
			/>
		  ));
		return (
		
			<div className={classes.Palette}>
			  <Navbar showSlider={false} handleChange={this.handleformatchange}/>
			<div className={classes.colors}>{colorBoxes}
			<div className={classes.goBack}>
			  	<Link to={`/palette/${this.props.palette.id}`} className="back-button">GO BACK</Link>
			  </div>
			</div>
			
			  
			  <Palettefooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
			  </div>
		
		)
	}
}
export default withStyles(styles)(SingleColorPalette);
