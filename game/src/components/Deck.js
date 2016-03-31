import React from 'react'
import CardeonAPI from '../sources/CardeonAPI';
import config from '../config/gamegrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Deck extends React.Component {
  constructor(props) {
    super(props);

    let grid = HexGrid.generate(config.deck);
    this.state = {
      cards: [],
      layout: grid.layout,
      hexagons: grid.hexagons
    };
  }
  // Now that this class is on control of hexagons and the cards, I can combine them together
  // and assign card per hexagon.
  componentWillMount() {
    CardeonAPI.getCards().then(response => {
      this.setState({
        cards: response.data
      })
    })
  }

  render() {
    return (
      <div className="eight wide column">
        <h3>Your deck</h3>
        <small>You can drag cards from your deck to the board.</small><br />
        <HexGrid actions={this.props.actions} width={config.deck.width} height={config.deck.height}
          hexagons={this.state.hexagons} layout={this.state.layout} />
      </div>
    )
  }

}

Deck.propTypes = {
  actions: React.PropTypes.object.isRequired
};

export default Deck;
