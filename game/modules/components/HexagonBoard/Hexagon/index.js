import React from 'react';
import css from './hexagon.css'

class CardHexagon extends React.Component {

  allowDrop(event) {
    event.preventDefault();
  }

  handleDrop(event) {
    event.preventDefault();

    let cardData = JSON.parse(event.dataTransfer.getData('card'));
    console.log("Dropped", cardData);
  }

  render() {
    return (
      <svg className={css.hexagon} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" onDrop={this.handleDrop} onDragOver={this.allowDrop}>
        <polygon className={css.polygon} points="25,5 75,5 99,50 75,95 25,95 1,50" fill="#ACACAC" />
      </svg>
    );
  }
}

CardHexagon.defaultProps = {

};

export default CardHexagon;
