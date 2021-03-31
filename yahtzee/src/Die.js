import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  handleClick=(evt)=>{
    this.props.handleClick(this.props.idx)
  }
  render() {
    const dieclass=
		{
			1:'one',
			2:'two',
			3:'three',
			4:'four',
			5:'five',
			6:'six'
    };
    let classes="Die fa-4x fas fa-dice-"+dieclass[this.props.val]
    if (this.props.locked) classes+=" Die-locked ";
    if (this.props.rolling) classes+= " Die-rolling";
    return (
      <i className={ classes }
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />

    );
  }
}

export default Die;
