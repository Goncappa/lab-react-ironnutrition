import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import data from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import Search from './Search'


class App extends React.Component {
  state = {
    foods: data,
    display: false,
    letter: '',
    query: ''
  };

  // const searchLetter = this.state.letter

  addFoodHandler = (food) => {
    this.setState({ foods: [...this.state.foods, food] });
  };

  sendQuery = (val) => {
    this.setState({
      query: val
    })
  }

  render() {
    // const cond = false

    // const filteredFoods = this.state.foods.filter(food => {
    //   food.name.includes(query)
    // }) 
    
    const filteredFoods = this.state.query 
    ? this.state.foods.filter((food) => food.name.includes(this.state.query))
    : this.state.foods;

    return (
      <div>
        {/* <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} /> */}
      <Search sendQuery={this.sendQuery} />
        <button
          onClick={(event) => {
            this.setState({ display: !this.state.display });
          }}
        >
          Add
        </button>

        {this.state.display ? <AddFood addFood={this.addFoodHandler} /> : ''}

        {filteredFoods.map((food, i) => {
          return <FoodBox {...food} key={i} />;
        })}
      </div>
    );
  }
}

export default App;
