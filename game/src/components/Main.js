import React from 'react'
import Title from 'react-title-component'
import HexagonGrid from './HexagonGrid/'
// import Deck from './Deck';
// import HexagonBoard from './HexagonBoard';

class Home extends React.Component {
  // <Deck />
  // <HexagonBoard height={16} width={8} />
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
