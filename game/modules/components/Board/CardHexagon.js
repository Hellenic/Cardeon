import React from 'react';
import css from './hexagon.css'

class CardHexagon extends React.Component {

  render() {
    let card = this.props.data;
    let id = 'card-image-' + card.id;
    // Original: 50,1 95,25 95,75 50,99 5,75 5,25
    // Rotated: 25,5 75,5 99,50 75,95 25,95 1,50
    return (
      <svg className={css.hexagon} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} patternUnits="userSpaceOnUse" width="100" height="100">
            <image xlinkHref={'http://localhost:7979/cards/' + card.template.picture} x="-25" width="150" height="100" />
          </pattern>
        </defs>
        <polygon className={css.polygon} points="25,5 75,5 99,50 75,95 25,95 1,50" fill={ 'url(#'+ id +')'} />
        <text className={css.text} fontSize="20" x="50" y="50" textAnchor="middle">{card.name}</text>
      </svg>
    );
  }
}

CardHexagon.defaultProps = {
  data: {}
};

export default CardHexagon;
