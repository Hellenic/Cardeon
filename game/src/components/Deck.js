import React from 'react'
import CardeonAPI from '../sources/CardeonAPI';
import config from '../config/gamegrid'
// import { HexGrid } from 'react-hexgrid';
import { HexGrid } from '../../../../react-hexgrid/';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    CardeonAPI.getCards().then(response => {
      console.log('cards', response.data);
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
        <HexGrid actions={this.props.actions} {...config.deck} />
      </div>
    )
  }

}

Deck.propTypes = {
  actions: React.PropTypes.object.isRequired
};

export default Deck;
