import React from 'react';
import Button from "./btn";


class Display extends React.Component {
  
  render(){
    return(
      <div>
        <div style={{padding: '30px', 
                     color:'black', 
                    fontSize: '90px', 
                    backgroundColor:`${this.props.bg}`}}>
          {this.props.number}
        </div>
        <Button plus={this.props.plus} 
              minus={this.props.minus} 
              restart={this.props.restart}/>
      </div>

    );
}
}

export default Display;
