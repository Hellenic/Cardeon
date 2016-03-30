import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gridActions from '../actions/game'
import Game from '../components/Game';

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gridActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
