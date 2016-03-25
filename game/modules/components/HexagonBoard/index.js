import React from 'react';
import axios from 'axios';
import Hexagon from '../Hexagon';
import css from './board.css'

class HexagonBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    let rows = [];
    for (let row=0; row<this.props.height; row++)
    {
      let rowSlots = [];
      for (let col=0; col<this.props.width; col++)
      {
        rowSlots.push((<Hexagon key={row+'-'+col} row={row} col={col} onDrop={(card, row, col) => {this.handleDrop(card, row, col)}} />));
      }

      let rowClasses = css.row + ' ';
      rowClasses += (row % 2) ? css.even : css.odd;
      rows.push((
        <div key={row} className={rowClasses}>
          {rowSlots}
        </div>
      ));
    }

    this.setState({
      rows: rows
    });
  }

  getNearbySlots(row, col) {
    return 'Not implemented yet!';
  }

  handleDrop(card, row, col) {
    console.log('Card dropped', card, row, col);
    console.log('Anything nearby?', this.getNearbySlots(row, col));
  }

  render() {
    return (
      <div className={css.board}>
        <h3>Game board of size: {this.props.width} x {this.props.height}</h3>
        <small>Drop cards here to try out how they fight</small><br />
        {this.state.rows}
      </div>
    );
  }
}

export default HexagonBoard;
