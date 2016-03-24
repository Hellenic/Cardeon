import React from 'react';
import axios from 'axios';
import Template from './Template';

class CardTemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: []
    };
  }

  componentWillMount() {
    axios.get('http://0.0.0.0:7992/api/CardTemplates?filter[include]=family').then(response => {
      this.setState({
        templates: response.data
      })
    });
  }

  render() {
    let templateItems = this.state.templates.map((template, index) => {
      return (<Template key={index} data={template} />);
    });
    return (
      <div className="ui link centered cards">
        {templateItems}
      </div>
    );
  }
}

export default CardTemplateList;
