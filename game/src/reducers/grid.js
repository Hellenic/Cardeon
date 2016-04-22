/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/HexagonGrid.js accordingly.
 */
import * as Types from '../actions/const';
import { HexUtils } from '../../../../react-hexgrid/';
const initialState = {
  deck: { hexagons: [], layout: {} },
  board: { hexagons: [], layout: {} }
};

module.exports = function(state = initialState, action) {
  let nextState = Object.assign({}, state);

  // TODO If there is some basic common actions, they should be handled in Hexgrid library

  switch(action.type) {
    case Types.HEX_MOUSE_ENTER: {
      // console.log('Mouse enter', action.hex)
      return nextState;
    }
    case Types.HEX_MOUSE_LEAVE: {
      // console.log('Mouse leave', action.hex)
      return nextState;
    }
    case Types.HEX_DRAG_START: {
      // console.log('Drag started', action.hex)
      return nextState;
    }
    case Types.HEX_DRAG_END: {
      // console.log('Drag ended', action.hex)
      return nextState;
    }
    case Types.HEX_DROP: {
      // Add card to from deck to board
      let hex = nextState.board.hexagons.find(hexa => { return HexUtils.equals(hexa, action.hex) });
      hex.props = action.target.props;

      // Remove card from deck
      let oldHex = nextState.deck.hexagons.find(hexa => { return HexUtils.equals(hexa, action.target) });
      oldHex.props = {};

      return nextState;
    }
    case Types.BOARD_CREATED: {
      nextState.board = action.grid;
      return nextState;
    }
    case Types.DECK_CREATED: {
      nextState.deck = action.grid;
      return nextState;
    }
    case Types.DECK_UPDATED: {
      nextState.deck.hexagons = action.hexagons;
      return nextState;
    }
    default: {
      return state;
    }
  }
}
