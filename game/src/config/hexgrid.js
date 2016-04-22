export default {
  board: {
    width: 800,
    height: 800,
    layout: {width: 10, height: 10},
    flat: true,
    origin: {x: 0, y: 0},
    map: 'hexagon',
    mapProps: [ 2 ]
  },
  deck: {
    width: 500,
    height: 500,
    layout: {width: 10, height: 10},
    flat: false,
    origin: {x: -35, y: -30},
    map: 'triangle',
    mapProps: [ 4 ]
  }
}
