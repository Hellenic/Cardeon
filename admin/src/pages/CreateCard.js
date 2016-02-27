import React from 'react';
import CreateCardForm from '../components/CreateCardForm';
import Card from '../components/Card';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardData: null };
  }

  handleFormChange(cardData) {
    this.setState({
      cardData: cardData
    });
  }

  render() {
    return (
      <div className="ui container segment">

        <h1>Create new card</h1>

        <div className="ui doubling stackable grid container">
          <div className="twelve wide text left aligned column">
            <CreateCardForm onFormChange={data => { this.handleFormChange(data); }} />
          </div>
          <div className="four wide column">
            <h3>Card preview</h3>
            <Card data={this.state.cardData} />
          </div>
        </div>

      </div>
    );
  }
}

export default CreateCard;
