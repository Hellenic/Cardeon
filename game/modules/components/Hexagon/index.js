import React from 'react';
import css from './hexagon.css'

class CardHexagon extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      card: this.props.card,
      hover: false
    };
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDragEnter(event) {
    this.setState({
      hover: true
    })
  }
  handleDragLeave(event) {
    this.setState({
      hover: false
    })
  }

  handleDrop(event) {
    event.preventDefault();

    let cardData = JSON.parse(event.dataTransfer.getData('card'));
    this.setState({
      card: cardData
    });
    this.props.onDrop(cardData, this.props.row, this.props.col);
  }

  handleDrag(event) {
    event.dataTransfer.setData("card", JSON.stringify(this.props.card));

    var dragIcon = document.createElement('img');
    dragIcon.src = 'http://localhost:7993/cards/' + this.props.card.template.picture;
    dragIcon.width = 50;
    event.dataTransfer.setDragImage(dragIcon, -10, -10);
  }

  render() {
    if (this.state.card)
    {
      let card = this.state.card;
      let id = 'card-board-image-' + card.id;
      return (
        <svg className={css.hexagon} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" draggable="true" onDragStart={(e) => this.handleDrag(e)}>
          <defs>
            <pattern id={id} patternUnits="userSpaceOnUse" width="100" height="100">
              <image xlinkHref={'http://localhost:7993/cards/' + card.template.picture} x="-25" width="150" height="100" />
            </pattern>
          </defs>
          <polygon className={css.polygon} points="25,5 75,5 99,50 75,95 25,95 1,50" fill={ 'url(#'+ id +')'} />
          <text className={css.text} fontSize="15" x="50" y="50" textAnchor="middle">{card.name}</text>
        </svg>
      );
    }

    return (
      <svg className={css.hexagon} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" onDrop={(e) => this.handleDrop(e)} onDragOver={this.handleDragOver} onDragEnter={(e) => this.handleDragEnter(e)} onDragLeave={(e) => this.handleDragLeave(e)}>
        <polygon className={(this.state.hover) ? css.polygonHover : css.polygon} points="25,5 75,5 99,50 75,95 25,95 1,50" fill="#ACACAC" />
      </svg>
    );
  }
}

CardHexagon.defaultProps = {
  card: null,
  draggable: false,
  onDrop: () => {}
};

export default CardHexagon;
