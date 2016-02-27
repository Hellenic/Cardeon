import React from 'react';
import axios from 'axios';
import Card from './Card';

class CardList extends React.Component {
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
      return (<Card key={index} data={card} />);
    });
    return (
      <div className="ui link centered cards">
        {cards}
      </div>
    );
  }
}

export default CardList;
