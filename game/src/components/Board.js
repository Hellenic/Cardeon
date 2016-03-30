import React from 'react'
import config from '../config/gamegrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Board extends React.Component {

  render() {
    return (
      <div className="eight wide column">
        <h3>Game board</h3>
        <small>Drop cards here to try out how they fight</small><br />
        <HexGrid actions={this.props.actions} {...config.board} />
      </div>
    )
  }

}

Board.propTypes = {
  actions: React.PropTypes.object.isRequired
};

export default Board;
