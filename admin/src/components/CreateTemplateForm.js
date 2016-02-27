import React from 'react';

class CreateTemplateForm extends React.Component {

  render() {
    return (
      <form className="ui form">
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="field">
            <label>Family</label>
            <input type="text" placeholder="Family" disabled="disabled" />
          </div>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea name="description" rows="2"></textarea>
        </div>
        <div className="field">
          <label>Picture TODO</label>
        </div>
        <button className="ui button" type="submit">Create</button>
      </form>
    );
  }
}

export default CreateTemplateForm;
