
import './App.css';
import { Route } from 'react-router-dom';
import React,{ Component } from 'react';

class App extends Component{
  render(){
  const  result=props=>{
    let operation=props.match.params.operation;
    let var1=parseInt(props.match.params.var1);
    let var2=parseInt(props.match.params.var2);
    if (operation==="add"){
      return <h1> Result is {var1+var2}</h1>
    }else if(operation==="subtract"){
      return <h1> Result is {var1-var2}</h1>
    }else if(operation==="multiply"){
      return <h1> Result is {var1*var2}</h1>
    }else if(operation==="divide"){
      return <h1> Result is {var1/var2}</h1>
    }
    else{
      return <h1>Something is wrong!</h1>
    }
  }
  return (
    <div className="App">
      <Route path="/:operation/:var1/:var2" render={result}/>
    </div>
  );
  }
}

export default App;
