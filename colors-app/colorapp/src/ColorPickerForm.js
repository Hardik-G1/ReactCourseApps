import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem"
  },
  colorNameInput: {
    width: "100%",
    height: "70px"
  }
};
class ColorPickerForm extends Component {
	constructor(props){
		super(props);
		this.state={
			currentColor:"teal",
			newColorName:""
		}
	}
	updateColor=(newColor)=>{
		this.setState({currentColor:newColor.hex})
	}

	handleChange=(evt)=>{
		this.setState({[evt.target.name]:evt.target.value});
	}
	handleSubmit=()=> {
		const newColor = {
		  color: this.state.currentColor,
		  name: this.state.newColorName
		};
		this.props.addColor(newColor);
		this.setState({ newColorName: "" });
	  }
	componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", value =>
		  this.props.colors.every(
			({ name }) => name.toLowerCase() !== value.toLowerCase()
		  )
		);
		ValidatorForm.addValidationRule("isColorUnique", value =>
		  this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}
	render() {
		return (
			<div>
			<ChromePicker className={this.props.classes.picker} color={this.state.currentColor} onChangeComplete={this.updateColor}/>
          <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
			<TextValidator 
			className={this.props.classes.colorNameInput}
            placeholder='Color Name'
			value={this.state.newColorName}
			variant='filled'
            margin='normal'
            name='newColorName'
            color='primary'
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}              
          errorMessages={["Enter a color name",	"Color name must be unique","Color already used!"]}
          />	
          <Button
              variant='contained'
			  type='submit'
			  className={this.props.classes.addColor}
              color='primary'
              style={{backgroundColor: this.props.paletteIsFull ? "grey" : this.state.currentColor}}
              disabled={this.props.paletteIsFull}
            >
              {this.props.paletteIsFull ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
          </div>
		)
	}
}
export default withStyles(styles)(ColorPickerForm);