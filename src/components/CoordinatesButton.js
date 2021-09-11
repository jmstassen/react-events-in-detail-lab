// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
  
    handleClick = (event) => {
      const callback = this.props.onReceiveCoordinates
      const coordinates = [event.clientX, event.clientY]
  
      callback(coordinates)
    }
  
    render() {
      return(
        <button onClick={this.handleClick}></button>
      )
    }
}