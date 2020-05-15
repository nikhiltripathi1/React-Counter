import React from 'react';
import './btn.css'

class Button extends React.Component {
    
  render(){
      return(
    <div>
      <button className='btn' onClick={this.props.plus}>
        <span className='emoji' role='img'aria-label='plus' >
          &#10133;
        </span>
      </button>
      <button className='btn' onClick={this.props.restart}>
        <span className='emoji' role='img'aria-label='restart'>
          &#128260;
        </span>
      </button>
      <button className='btn' onClick={this.props.minus}>
        <span className='emoji' role='img'aria-label='minus'>
          &#10134;
        </span>
      </button>
    </div>
   
      );}
}

export default Button ;