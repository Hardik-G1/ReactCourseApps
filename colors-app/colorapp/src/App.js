import Palette from "./Palette";
import seedColors from './seedColors';
import {generatePalette} from './colorHelper'
import {Switch,Route} from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { Component } from "react";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      palette: seedColors,

    }
  }
  findPalet=(id)=>{
    return this.state.palette.find(function(data){
      return data.id===id
    })
  }
  savePalet=(newPalet)=>{
    this.setState({ palette:[...this.state.palette,newPalet]});
  }
  render(){
  return (
    <Switch>
      <Route exact path="/palette/new" render={(routerProps)=><NewPaletteForm palettes={this.state.palette} savePalet={this.savePalet} {...routerProps}/>}/>
      <Route exact path="/" render={(routeProps)=><PaletteList list={this.state.palette} {...routeProps}/>}/>
      <Route exact path="/palette/:id" render={(routerProps)=><Palette 
        palette={generatePalette(this.findPalet(routerProps.match.params.id))}/>}
      />
      <Route exact path="/palette/:paletteid/:colorId" render={(routeProps)=><SingleColorPalette  
        colorId={routeProps.match.params.colorId}
        palette={generatePalette(this.findPalet(routeProps.match.params.paletteid)) }/> 
      }/>
    </Switch>
  );
  }
}

export default App;
