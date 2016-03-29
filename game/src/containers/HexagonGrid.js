import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addHex } from '../actions/hexgrid'
import config from '../config/hexgrid'
// import { HexGrid } from 'react-hexgrid';
import HexGrid from '../components/Hexlib/HexGrid';

class HexagonGrid extends Component {
  render() {
    const {actions, hexgrid} = this.props;
    return <HexGrid actions={actions} test={hexgrid.test} {...config} />;
  }
}

HexagonGrid.propTypes = {
  actions: PropTypes.object.isRequired,
  hexgrid: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = { hexgrid: state.hexgrid };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { addHex };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(HexagonGrid);
