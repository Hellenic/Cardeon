import React from 'react';
import axios from 'axios';

class CreateTemplateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      families: [],
      images: []
    };
  }

  componentWillMount() {
    axios.get('http://0.0.0.0:7992/api/CardFamilies').then(response => {
      this.setState({
        families: response.data
      })
    });
    axios.get('http://0.0.0.0:7993/files').then(response => {
      this.setState({
        images: response.data
      })
    });
  }

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
            <select placeholder="Family">
              {
                this.state.families.map(family => {
                  return <option value={family.id}>{family.name}</option>
                })
              }
            </select>
          </div>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea name="description" rows="2"></textarea>
        </div>
        <div className="field">
          <label>Picture</label>
          <select placeholder="Picture">
            {
              this.state.images.map(image => {
                return <option value={image.path}>{image.name}</option>
              })
            }
          </select>
        </div>
        <button className="ui button" type="submit">Create</button>
      </form>
    );
  }
}

export default CreateTemplateForm;
