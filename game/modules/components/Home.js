import React from 'react'
import Title from 'react-title-component'
import HexagonGrid from './HexagonGrid/'

class Home extends React.Component {
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

export default Home;
