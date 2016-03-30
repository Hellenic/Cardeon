/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/HexagonGrid.js accordingly.
 */
import * as Types from '../actions/const';
const initialState = {};

module.exports = function(state = initialState, action) {
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case Types.HEX_MOUSE_ENTER: {
      console.log('Mouse enter', action.hex)
      return nextState;
    } break;
    case Types.HEX_MOUSE_LEAVE: {
      console.log('Mouse leave', action.hex)
      return nextState;
    } break;
    case Types.HEX_DRAG_START: {
      console.log('Drag started', action.hex)
      return nextState;
    } break;
    case Types.HEX_DRAG_END: {
      console.log('Drag ended', action.hex)
      return nextState;
    } break;
    case Types.HEX_DROP: {
      console.log('Dropped', action.hex)
      return nextState;
    } break;
    default: {
      return state;
    }
  }
}
