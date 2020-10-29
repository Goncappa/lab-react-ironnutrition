import React from 'react';
import App from './App';

const initialState = {
  name: '',
  number: '',
  calories: '',
  image: '',
};

class AddFood extends React.Component {
  state = initialState;

  handleFormSubmit = (event) => {
    event.preventDefault(); //
    this.props.addFood(this.state);
    this.setState(initialState);
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          ></input>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInputChange}
          ></input>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInputChange}
          ></input>
          <button
          // onClick={(event) => {
          //   App.state.display = false;
          // }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
