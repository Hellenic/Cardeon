import React from 'react';
import axios from 'axios';

class CreateCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [],
      elements: [],
      types: [],
      cardData: {}
    };
  }

  handleChange(event) {
    let data = this.state.cardData;
    data[event.target.name] = event.target.value;

    // When ID was updated, populate the corresponding data from the state
    // e.g. templateId was updated => Find template data for that ID and set it to 'template' property
    if (event.target.name.endsWith('Id')) {
      let propertyName = event.target.name.substring(0, event.target.name.length-2);
      let statePropName = propertyName + 's';
      data[propertyName] = this.state[statePropName].find(item => { return item.id == event.target.value });
    }

    this.setState({
      cardData: data
    });
    this.props.onFormChange(data);
  }
  randomizeAll(event) {
    console.log('Randomize all', event);
  }
  randomizeArrows() {
    let arrowsInput = document.querySelector('input[name=arrows]');
    arrowsInput.value = Math.floor(Math.random() * 255);
  }
  componentWillMount() {
    axios.get('http://0.0.0.0:3000/api/CardTemplates?filter[include]=family').then(response => {
      this.setState({ templates: response.data });
    });
    axios.get('http://0.0.0.0:3000/api/CardElements').then(response => {
      this.setState({ elements: response.data });
    });
    axios.get('http://0.0.0.0:3000/api/CardTypes').then(response => {
      this.setState({ types: response.data });
    });
  }

  render() {
    return (
      <form className="ui form" id="create-card-form" onChange={event => {this.handleChange(event); }}>
        <div className="two fields">
          <div className="field">
            <label>Card template</label>
              <select name="templateId">
                <option value="">Select type</option>
                {
                  this.state.templates.map((template, index) => {
                    return (<option key={index} value={template.id}>{template.name}</option>);
                  })
                }
              </select>
          </div>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
        </div>

        <div className="three fields">
          <div className="field">
            <label>Attack</label>
            <input type="text" name="attack" placeholder="123" />
          </div>
          <div className="field">
            <label>Defence</label>
            <input type="text" name="defence" placeholder="123" />
          </div>
          <div className="field">
            <label>Magic defence</label>
            <input type="text" name="magicdefence" placeholder="123" />
          </div>
        </div>

        <div className="four fields">
          <div className="field">
            <label>Type</label>
            <select name="typeId">
              <option value="">Select type</option>
              {
                this.state.types.map((type, index) => {
                  return (<option key={index} value={type.id}>{type.name}</option>);
                })
              }
            </select>
          </div>
          <div className="field">
            <label>Element</label>
            <select name="elementId">
              <option value="">Select element</option>
              {
                this.state.elements.map((element, index) => {
                  return (<option key={index} value={element.id}>{element.name}</option>);
                })
              }
            </select>
          </div>
          <div className="field">
            <div className="ui toggle checkbox">
              <input type="checkbox" name="vendor" />
              <label>Should card be sellable on the shop</label>
            </div>
          </div>
          <div className="field">
            <div className="ui toggle checkbox">
              <input type="checkbox" name="unique" />
              <label>Should card will disappear from shop once bought</label>
            </div>
          </div>
        </div>

        <div className="two fields">
          <div className="field">
            <label>Arrows</label>
            <input type="text" name="arrows" placeholder="123" />
          </div>
          <div className="field">
            <button className="ui button" type="button" onClick={this.randomizeArrows}>Randomize</button>
          </div>
        </div>

        <div className="two fields">
          <div className="field">
            <label>Price</label>
            <input type="text" name="price" placeholder="123" />
          </div>
          <div className="field">
            <label>Rank</label>
            <input type="text" name="rank" placeholder="123" />
          </div>
        </div>

        <button className="ui button" type="button" onClick={this.randomizeAll}>Randomize all</button>
        <button className="ui button" type="submit">Create</button>
      </form>
    );
  }
}

export default CreateCardForm;
