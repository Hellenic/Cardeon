import React from 'react';

class CardUtils {

  static dec2bin(arrows)
  {
      var arrows = arrows;
      if ((/[^0-9]/g.test(arrows)) || arrows == '')
      {
          console.log('Something wrong with the arrow data', arrows);
          return false;
      }

      var bin = parseInt(arrows).toString(2);
      if (bin.length < 8)
      {
          while (bin.length < 8)
          {
              bin = '0' + bin;
          }
      }

      return bin;
  }

  static getArrowElement(arrow, id)
  {
      if (arrow == 1)
      {
        // TODO Calculate the values instead of hard-coding
        let arrowStyle = {};
        switch (id) {
          case 0:
            arrowStyle = { transform: 'translate(0%,0%) rotate(-45deg)' };
            break;
          case 1:
            arrowStyle = { transform: 'translate(50%,0%) rotate(0deg)' };
            break;
          case 2:
            arrowStyle = { transform: 'translate(100%,0%) rotate(45deg)' };
            break;
          case 3:
            arrowStyle = { transform: 'translate(100%,50%) rotate(90deg)' };
            break;
          case 4:
            arrowStyle = { transform: 'translate(100%,100%) rotate(135deg)' };
            break;
          case 5:
            arrowStyle = { transform: 'translate(50%,100%) rotate(180deg)' };
            break;
          case 6:
            arrowStyle = { transform: 'translate(0%,100%) rotate(225deg)' };
            break;
          case 7:
            arrowStyle = { transform: 'translate(0%,50%) rotate(270deg)' };
            break;
        }

        return (<i className="arrow up icon" style={arrowStyle}></i>);
      }

      return '';
  }
}

export default CardUtils;
