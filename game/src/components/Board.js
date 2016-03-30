import React from 'react'
import config from '../config/gamegrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Board extends React.Component {

  render() {
    return (
      <HexGrid actions={this.props.actions} {...config.board} />
    )
  }

}

Board.propTypes = {
  actions: React.PropTypes.object.isRequired
};

export default Board;
