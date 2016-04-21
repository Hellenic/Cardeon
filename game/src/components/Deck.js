import React from 'react'
import CardeonAPI from '../sources/CardeonAPI';
import config from '../config/gamegrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Deck extends React.Component {
  constructor(props) {
    super(props);

    let grid = HexGrid.generate(config.deck);
    this.props.actions.createDeck(grid);
  }

  componentWillMount() {
    CardeonAPI.getCards().then(response => {
      // Temp filtering
      let deck = response.data.filter(card => { return card.userId == "2"; }).splice(0, 15);

      // TODO Grid generation actually should be here, to generate grid to exactly to the deck size
      let hexas = this.props.grid.hexagons.map((hex, index) => {
        let card = deck[index];
        if (!card)
          return hex;
        let img = 'http://localhost:7993/cards/' + card.template.picture;
        let props = { text: card.name, image: img, id: card.id }
        return Object.assign({}, hex, { props: props })
      });

      this.props.actions.updateDeck(hexas);
    })
  }

  render() {
    let grid = this.props.grid;
    return (
      <div className="eight wide column">
        <h3>Your deck</h3>
        <small>You can drag cards from your deck to the board.</small><br />
        <HexGrid actions={this.props.actions} width={config.deck.width} height={config.deck.height}
          hexagons={grid.hexagons} layout={grid.layout} />
      </div>
    )
  }

}

Deck.propTypes = {
  actions: React.PropTypes.object.isRequired,
  grid: React.PropTypes.object.isRequired
};

export default Deck;
