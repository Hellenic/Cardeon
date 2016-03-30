import React from 'react'
import config from '../config/gamegrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Deck extends React.Component {

  render() {
    return (
      <HexGrid actions={this.props.actions} {...config.deck} />
    )
  }

}

Deck.propTypes = {
  actions: React.PropTypes.object.isRequired
};

export default Deck;
