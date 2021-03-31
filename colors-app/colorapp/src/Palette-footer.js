import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";
class Palettefooter extends Component {
	render() {
		return (
			<div>
				<footer className={this.props.classes.PaletteFooter}>
					{this.props.paletteName}
					<span className={this.props.classes.emoji}>{this.props.emoji}</span>
				</footer>
			</div>
		)
	}
}
export default withStyles(styles)(Palettefooter)