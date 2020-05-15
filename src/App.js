import React from 'react';
import './App.css';
import Display from "./display";
import randomColor from 'randomcolor';


class App extends React.Component{
  state={
     number: 0,
  }
  bg = 'white' ;
plus = () => {
  this.setState({number: this.state.number+1});
  this.bg=randomColor() ;
}
minus=()=> {
  this.setState({number: this.state.number-1});
  this.bg=randomColor() ;
}
restart=()=> {
  this.setState({number: 0});
  this.bg='white';
}


render(){
  
  return(
    <div className="App">
      <div className="App-header">
        <Display bg={this.bg} 
                 number={this.state.number} 
                 plus={this.plus} 
                 minus={this.minus} 
                 restart={this.restart}/>      
      </div>
    </div>
  );
}
}

export default App;
