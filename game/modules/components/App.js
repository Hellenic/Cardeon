import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render="Cardeon Client - Alpha 0.02"/>
        <h1>Cardeon Client</h1>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/board">Game board</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
