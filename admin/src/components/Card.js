import React from 'react';
import CardPicture from './CardPicture';

class Card extends React.Component {

  render() {
    let card = this.props.data;
    if (card == null || card == undefined)
    {
      return (<div className="ui card">...</div>);
    }
    let pictureUrl = 'images/cards/' + card.template.picture;

    return (
      <div className="ui card">
        <CardPicture url={pictureUrl} arrows={card.arrows} />
        <div className="content">
          <a className="header">{card.name}</a>
          <div className="meta">
            <span className="date">Created on 1.1.2011</span>
          </div>
          <div className="meta">
            <span className="signature"><i>{card.signature}</i></span>
          </div>
          <div className="description">{card.template.description}</div>
        </div>
        <div className="extra content">
          <a>
            <i className="linkify icon"></i>
            Owned by 42 players. Used in 24 decks.
          </a>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  data: {}
};

export default Card;
