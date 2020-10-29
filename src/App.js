import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import data from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class App extends React.Component {
  state = {
    foods: data,
    display: false,
  };

  addFoodHandler = (food) => {
    this.setState({ foods: [...this.state.foods, food] });
  };

  render() {
    // const cond = false
    return (
      <div>
        <button
          onClick={(event) => {
            this.setState({ display: !this.state.display });
          }}
        >
          Add
        </button>

        {this.state.display ? <AddFood addFood={this.addFoodHandler} /> : ''}

        {this.state.foods.map((food, i) => {
          return <FoodBox {...food} key={i} />;
        })}
      </div>
    );
  }
}

export default App;
