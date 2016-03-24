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
        rowSlots.push((<Hexagon key={row+'-'+col} />));
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

  render() {
    return (
      <div className={css.board}>
        <h3>Game board of size: {this.props.width} x {this.props.height}</h3>
        {this.state.rows}
      </div>
    );
  }
}

export default HexagonBoard;
