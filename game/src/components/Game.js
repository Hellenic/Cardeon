import React, { Component, PropTypes } from 'react'
import Title from 'react-title-component'
import Board from './Board';
import Deck from './Deck';

class Game extends Component {
  render() {
    const {actions, grid} = this.props;
    return (
      <div className="ui grid">
        <Title render={prev => `${prev} | Game board | Cardeon - Alpha 0.02`}/>
        <Board actions={actions} grid={grid.board} />
        <Deck actions={actions} grid={grid.deck} />
      </div>
    );
  }
}

Game.propTypes = {
  actions: PropTypes.object.isRequired,
  grid: PropTypes.object.isRequired
};

export default Game;
