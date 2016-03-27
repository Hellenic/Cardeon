import React from 'react';
import { Grid, Hex, Layout } from './Hexlib/';

class HexagonGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: []
    };
  }

  componentWillMount() {
    let hexagons = [];
    let layout = new Layout(10, 10, false);

    this.props.hexas.forEach(hex => {
      hexagons.push(hex);
    });

    this.setState({
      hexagons: hexagons,
      layout: layout
    });
  }

  render() {
    return (
      <div>
        <Grid width={800} height={600} hexagons={this.state.hexagons} layout={this.state.layout} />
      </div>
    );
  }
}

HexagonGrid.defaultProps = {
  hexas: [
    new Hex(0, -1, 0), new Hex(1, -1, -1),
    new Hex(-1, 0, 1), new Hex(0, 0, 0), new Hex(1, 0, -1),
    new Hex(-1, 1, 1), new Hex(0, 1, 0)
  ]
}

export default HexagonGrid;
