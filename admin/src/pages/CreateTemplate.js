import React from 'react';
import CreateTemplateForm from '../components/CreateTemplateForm';
import Template from '../components/Template';

class CreateTemplate extends React.Component {

  render() {
    return (
      <div className="ui container segment">
        <h1>Create new card template</h1>
        <span>Templates are used as a base for a new cards.</span>

        <div className="ui doubling stackable grid container">
          <div className="twelve wide text left aligned column">
            <CreateTemplateForm />
          </div>
          <div className="four wide column">
            <Template data={null}/>
          </div>
        </div>

      </div>
    );
  }
}

export default CreateTemplate;
