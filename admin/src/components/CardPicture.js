import React from 'react';
import CardUtils from '../utils/CardUtils';

class CardPicture extends React.Component {

  render() {
    let arrowIcons = [];
    if (this.props.arrows > 0)
    {
        var arrowBin = CardUtils.dec2bin(this.props.arrows);

        for (var i=0; i<8; i++)
        {
            var arrowIcon = CardUtils.getArrowElement(arrowBin[i], i);
            arrowIcons.push(arrowIcon);
        }
    }
    
    return (
      <div className="image">
        <div>
          <img src={this.props.url} className="floated left" data-arrows={this.props.arrows} />
          {arrowIcons}
        </div>
      </div>
    );
  }
}

CardPicture.defaultProps = {
  url: {},
  arrows: 0
};

export default CardPicture;
