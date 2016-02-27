import React from 'react';
import { IndexLink, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {

  render() {
    return (
      <div>

        <div className="ui pointing five large item menu">
          <IndexLink className="item" activeClassName="active" to="/">Cards</IndexLink>
          <Link className="item" activeClassName="active" to="/createcard">Create card</Link>
          <Link className="item" activeClassName="active" to="/cardtemplates">Card templates</Link>
          <Link className="item" activeClassName="active" to="/createtemplate">Create template</Link>
          <Link className="item" activeClassName="active" to="/about">About</Link>
        </div>

        <div>
          <ReactCSSTransitionGroup component="div" transitionName="fly" transitionAppear={true}
            transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppearTimeout={1000}>

              {React.cloneElement(this.props.children, {
                key: this.props.location.pathname
              })}

          </ReactCSSTransitionGroup>
        </div>

      </div>
    );
  }

}

export default App;
