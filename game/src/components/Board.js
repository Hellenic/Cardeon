import React from 'react'
import config from '../config/hexgrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Board extends React.Component {
  constructor(props) {
    super(props);

    let grid = HexGrid.generate(config.board);
    this.props.actions.createBoard(grid);
  }

  render() {
    let grid = this.props.grid;
    return (
      <div className="eight wide column">
        <h3>Game board</h3>
        <small>Drop cards here to try out how they fight</small><br />
        <HexGrid actions={this.props.actions} width={config.board.width} height={config.board.height}
          hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    )
  }

}

Board.propTypes = {
  actions: React.PropTypes.object.isRequired,
  grid: React.PropTypes.object.isRequired
};

export default Board;
