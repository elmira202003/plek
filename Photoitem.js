import React, { Component } from 'react';


class Photoitem extends Component{

  render(){
    
   return (
      <div className='photo' >
         <img alt={this.props.link} src={this.props.link} />        
      </div> 
    )
  }
}

export default Photoitem;

