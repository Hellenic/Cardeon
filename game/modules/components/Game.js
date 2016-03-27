import React from 'react'
import Title from 'react-title-component'
import Deck from './Deck';
import HexagonBoard from './HexagonBoard';

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Game board - Cardeon`}/>
        <Deck />
        <HexagonBoard height={16} width={8} />
      </div>
    )
  }
})
