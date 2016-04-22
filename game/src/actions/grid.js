import * as Types from './const';

// TODO Most of this should come from Hexgrid library
export const onMouseEnter = (hex, event) => {
  return {
    type: Types.HEX_MOUSE_ENTER,
    hex
  }
}
export const onMouseLeave = (hex, event) => {
  return {
    type: Types.HEX_MOUSE_LEAVE,
    hex
  }
}
export const onDragStart = (hex, event) => {
  event.dataTransfer.setData('hex', JSON.stringify(hex));
  return {
    type: Types.HEX_DRAG_START,
    hex
  }
}
export const onDragEnd = (hex, event) => {
  return {
    type: Types.HEX_DRAG_END,
    hex
  }
}
export const onDragOver = (hex, event) => {
  event.preventDefault();
  return {
    type: Types.HEX_DRAG_END,
    hex
  }
}
export const onDrop = (hex, event) => {
  event.preventDefault();
  let target = JSON.parse(event.dataTransfer.getData('hex'));
  return {
    type: Types.HEX_DROP,
    hex,
    target
  }
}
export const createBoard = (grid) => {
  return {
    type: Types.BOARD_CREATED,
    grid
  }
}
export const createDeck = (grid) => {
  return {
    type: Types.DECK_CREATED,
    grid
  }
}
export const updateDeck = (hexagons) => {
  return {
    type: Types.DECK_UPDATED,
    hexagons
  }
}
