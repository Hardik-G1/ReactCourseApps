import React, { Component } from 'react'
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";
import styles from "./styles/NavbarStyles";
import { withStyles } from '@material-ui/styles';
class Navbar extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 format:"hex",
			 open:false
		}
	}
	handleChange=(e)=>{
		this.setState({format:e.target.value,open:true})
		this.props.handleChange(e.target.value);
	}
	snackClose=()=>{
		this.setState({open:false})
	}
	render() {
		return (
			<header className={this.props.classes.Navbar}>
			<div className={this.props.classes.logo}>
			  <Link to="/">Color Palette</Link>
			</div>
			{this.props.showSlider && <div className='slider-container'>
			  <span>Level: {this.props.level}</span>
			  <div className={this.props.classes.slider}>
				<Slider
				  defaultValue={this.props.level}
				  min={100}
				  max={900}
				  step={100}
				  onAfterChange={this.props.changelevel}
				/>
			  </div>
			</div>}
			<div className={this.props.classes.selectContainer}>
				<Select value={this.state.format} onChange={this.handleChange}>
				  <MenuItem value="hex">HEX-#ffffff</MenuItem>
				  <MenuItem value="rgb">RGB-rgb(255,255,255)</MenuItem>
				  <MenuItem value="rgba">RGBA-rgba(255,255,255,1.0)</MenuItem>
				</Select>
			</div>
			<Snackbar
        		anchorOrigin={{
          		vertical: 'bottom',
          		horizontal: 'left',
        		}}
        	open={this.state.open}
        	autoHideDuration={2000}
			message={<span id='message-id'>
						Format Changed To {this.state.format.toUpperCase()}
					  </span>}
			onClose={this.snackClose}
        	action={[
					<IconButton size="small" aria-label="close" color="inherit" onClick={this.snackClose}>
					<CloseIcon />
					</IconButton>
				]}
      		/>
		  </header>
		)
	}
}
export default withStyles(styles)(Navbar);