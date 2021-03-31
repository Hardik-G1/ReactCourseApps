import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/styles";
class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 copied:false
		};
	}
	onCopied=()=>{
		this.setState({copied:true},()=>{
			setTimeout(()=>this.setState({copied:false}),1500)
		})
	}
	
	render() {
		const {
			name,
			background,
			moreurl,
			showingFullPalette,
			classes
		  } = this.props;
	  return (
		<CopyToClipboard text={background} onCopy={this.onCopied}>
		<div style={{ background }} className={classes.ColorBox}>
			<div style={{background}} className={`${classes.copyOverlay} ${this.state.copied &&
              classes.showOverlay}`}/>
			<div
            className={`${classes.copyMessage} ${this.state.copied &&
              classes.showMessage}`}
          >
            <h2>copied!</h2>
            <p className={classes.copyText}>{this.props.background}</p>
          	</div>
			  <div>	            
			<div className={classes.boxContent}>
			<span className={classes.colorName}>{name}</span>
			</div>
			<button className={classes.copyButton}>Copy</button>
		</div>
		{showingFullPalette && (<Link to={moreurl} onClick={(e)=>e.stopPropagation()}>
		<span className={classes.seeMore}>MORE</span>
		</Link>)}
		</div>
		</CopyToClipboard>
		
	  );
	}
}
export default withStyles(styles)(ColorBox);
