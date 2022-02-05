// Code Keypad Component Here
import React, { Component } from 'react';
export default class Keypad extends Component{
handleKeyUp = () =>{
  console.log('Entering password...')
}
  render(){
    return (
      <form>
      <input onKeyUp={this.handleKeyUp} type="password" name="password"/>
      </form>
    )

  }
}
