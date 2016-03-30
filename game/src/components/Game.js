import React, { Component, PropTypes } from 'react'
import Title from 'react-title-component'
import Board from './Board';
import Deck from './Deck';

class Game extends Component {
  render() {
    const {actions, game} = this.props;
    return (
      <div>
        <Title render={prev => `${prev} | Game board | Cardeon - Alpha 0.02`}/>
        <Board actions={actions} />
        <Deck actions={actions} />
      </div>
    );
  }
}

Game.propTypes = {
  actions: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired
};

export default Game;
