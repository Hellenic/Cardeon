import React from 'react';
import axios from 'axios';
import Hexagon from './Hexagon';

class HexagonBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    axios.get('http://0.0.0.0:3000/api/Cards?filter[include]=template&filter[include]=element&filter[include]=type').then(response => {
      this.setState({
        cards: response.data
      })
    });
  }

  render() {
    let cards = this.state.cards.map((card, index) => {
      return (<Hexagon key={index} card={card} draggable={true} />);
    });
    return (
      <div>
        <h3>Your deck:</h3>
        {cards}
      </div>
    );
  }
}

export default HexagonBoard;
