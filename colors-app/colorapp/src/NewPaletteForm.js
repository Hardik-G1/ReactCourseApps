import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import PaletteFormNav from "./PaletteFormNav";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import {arrayMove} from "react-sortable-hoc";
const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height:"100vh"
  },
  drawerPaper: {
    width: drawerWidth,
    display:"flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "100%"
  },
  button: {
    width: "50%"
  }	  
});


class NewPaletteForm extends Component {
  static defaultProps={
    maxColor:20
  }
  constructor(props){
    super(props)
      this.state={
        open:true,
        newColorName:"",
        colors:this.props.palettes[Math.floor(Math.random()*this.props.palettes.length)].colors
      }
    
  }


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  clearPalette=()=>{
    this.setState({colors:[]})
  }
  handleChange=(evt)=>{
    this.setState({[evt.target.name]:evt.target.value});
  }

  handleSumbit=(newPaletteName)=>{
    const newName=newPaletteName
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.savePalet(newPalette);
    this.props.history.push("/");
  }
  removeColor=(color)=>{
    this.setState({colors:this.state.colors.filter(d=>d.name!==color)})
  }
  addRandomColor=()=> {
    const allColors = this.props.palettes.map(p => p.colors).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState({ colors: [...this.state.colors, randomColor] });
  }
  addColor=(newColor)=>{
		this.setState({ colors: [...this.state.colors, newColor], newColorName: "" });
	}
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };	  
  render() {
    const { classes,palettes } = this.props;
    const { open } = this.state;
    const paletteIsFull = this.state.colors.length >= this.props.maxColor;
    return (
        <div className={classes.root}>
          <PaletteFormNav handleDrawerOpen={this.handleDrawerOpen} open={open}  palettes={palettes} handleSumbit={this.handleSumbit}/>
  	    <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container} >
          <Typography variant='h5' gutterBottom>Design Your Palette</Typography>
          <div className={classes.buttons}>
            <Button variant='contained' color='secondary' onClick={this.clearPalette}  className={classes.button}>
              Clear Palette
            </Button>
            <Button variant='contained' color='primary' onClick={this.addRandomColor} className={classes.button} disabled={paletteIsFull}>
              Random Color
            </Button>
          </div>
          <ColorPickerForm colors={this.state.colors} addColor={this.addColor} paletteIsFull={paletteIsFull}/>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList colors={this.state.colors}  removeColor={this.removeColor} axis='xy' onSortEnd={this.onSortEnd}/>
        </main>
      </div>
            
    );	 
  }	 
}	
export default withStyles(styles, { withTheme: true })(NewPaletteForm);