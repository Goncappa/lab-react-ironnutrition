import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import data from './foods.json';
import FoodBox from './FoodBox'

//for pushing


class App extends React.Component {

state = {
  foods: data
}
  render () {

  return (
    <div>
      {this.state.foods.map((food, i) => {
        return (
      <FoodBox {...food} key = {i}/>
  )
      
})}
  </div>
  )
}
}

export default App;
