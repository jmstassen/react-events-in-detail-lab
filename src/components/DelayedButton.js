// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
  
  handleClick = (e) => {
    e.persist()
    window.setTimeout(this.props.onDelayedClick(e), this.props.delay)
  }
}