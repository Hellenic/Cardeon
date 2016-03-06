import React from 'react';
import axios from 'axios';
import Hexagon from './CardHexagon';

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

    let rows = [];
    for (let w=0; w<this.props.width; w++)
    {
      for (let h=0; h<this.props.height; h++)
      {
        // TODO Rows & Columns
      }
    }

    let cards = this.state.cards.map((card, index) => {
      return (<Hexagon key={index} data={card} />);
    });
    return (
      <div className="ui link centered cards">
        {cards}
      </div>
    );
  }
}

export default HexagonBoard;
