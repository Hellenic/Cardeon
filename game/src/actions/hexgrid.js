import {HEXGRID} from './const';

export const addHex = (hex) => {
  return {
    type: HEXGRID,
    hex
  }
}
