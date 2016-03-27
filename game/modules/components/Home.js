import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <h1>Hexagon grid</h1>
      </div>
    )
  }
})
