import React from 'react';

class Template extends React.Component {

  render() {
    let template = this.props.data;
    if (template == null || template == undefined)
    {
      return (<div className="ui card">...</div>);
    }

    return (
      <div className="ui card">
        <div className="image">
          <img src={'http://localhost:7993/cards/' + template.picture} />
        </div>
        <div className="content">
          <a className="header">{template.name}</a>
          <div className="meta">
            <span className="family">Family: {template.family.name}</span>
          </div>
          <div className="meta">
            <span className="date">Created on 1.1.2011</span>
          </div>
          <div className="description">{template.description}</div>
        </div>
        <div className="extra content">
          <a>
            <i className="linkify icon"></i>
            Used in 42 cards
          </a>
        </div>
      </div>
    );
  }
}

Template.defaultProps = {
  data: {}
};

export default Template;
