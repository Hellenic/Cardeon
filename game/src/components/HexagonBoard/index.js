import React from 'react';
import axios from 'axios';
import Hexagon from '../Hexagon';
import css from './board.css'

class HexagonBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      cardSlots: []
    };
  }

  componentWillMount() {
    let rows = [];
    for (let row=0; row<this.props.height; row++)
    {
      let rowSlots = [];
      for (let col=0; col<this.props.width; col++)
      {
        let hexagon = (<Hexagon key={row+'-'+col} row={row} col={col} onDrop={(card, row, col) => {this.handleDrop(card, row, col)}} />);
        rowSlots.push(hexagon);
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
    let nearby = this.state.cardSlots.filter(slot => {
      if (slot.row == row-1 || slot.row == row || slot.row == row+1)
      {
        if (slot.col == col-1 || slot.col == col || slot.col == col+1)
        {
          return true;
        }
      }

      return false;
    });

    return nearby;
  }

  handleDrop(card, row, col) {
    let cardSlots = this.state.cardSlots;
    cardSlots.push({ row: row, col: col, card: card });
    this.setState({
      cardSlots: cardSlots
    });

    console.log('Nearby slots with cards', this.getNearbySlots(row, col));
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
