import * as Types from './const';

export const onMouseEnter = (hex) => {
  return {
    type: Types.HEX_MOUSE_ENTER,
    hex
  }
}
export const onMouseLeave = (hex) => {
  return {
    type: Types.HEX_MOUSE_LEAVE,
    hex
  }
}
export const onDragStart = (hex) => {
  return {
    type: Types.HEX_DRAG_START,
    hex
  }
}
export const onDragEnd = (hex) => {
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
  return {
    type: Types.HEX_DROP,
    hex
  }
}
