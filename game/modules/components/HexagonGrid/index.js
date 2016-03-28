import React from 'react';
import { HexGrid } from 'react-hexgrid';

class HexagonGrid extends React.Component {

  render() {

    let config = {
      width: 1400,
      height: 800,
      layoutSize: {width: 10, height: 10},
      flat: true,
      origin: {x: 0, y: 0}
    };

    return (<HexGrid {...config} />);
  }

}

export default HexagonGrid;
