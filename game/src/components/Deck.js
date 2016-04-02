import React from 'react'
import CardeonAPI from '../sources/CardeonAPI';
import config from '../config/gamegrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Deck extends React.Component {
  constructor(props) {
    super(props);

    let grid = HexGrid.generate(config.deck);
    // TODO this.props.actions.saveGrid(grid);
    this.state = {
      layout: grid.layout,
      hexagons: grid.hexagons
    };
  }
  // Now that this class is on control of hexagons and the cards, I can combine them together
  // and assign card per hexagon.
  componentWillMount() {
    CardeonAPI.getCards().then(response => {
      // Temp filtering
      let deck = response.data.filter(card => { return card.userId == "2"; });
      deck = deck.splice(0, 15);

      // TODO this.props.actions.saveDeck(deck);
      let hexas = this.state.hexagons.map((hex, index) => {
        let card = deck[index];
        if (!card)
          return hex;
        let img = 'http://localhost:7993/cards/' + card.template.picture;
        let props = { text: card.name, image: img, id: card.id }
        return Object.assign({}, hex, { props: props })
      });

      this.setState({
        hexagons: hexas
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
