import React from 'react'
import Title from 'react-title-component'
import HexagonGrid from '../containers/HexagonGrid'

class Main extends React.Component {

  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <h1>Hexagon grid</h1>
        <HexagonGrid />
      </div>
    )
  }

}

export default Main;
