import React from 'react';
import App from './App';


class Search extends React.Component {
state = {
    search: '',
};

// sendLetters = () => {
//     this.props.letters(this.state.search)
//     console.log(this.state.search)
    
// }

handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    
    this.setState({
      [name]: value,
    });

    this.props.sendQuery(value);
  };

  render() {
    return (
        <div>
            <input type="text" name="search" placeholder="Search name" value={this.state.search} onChange={this.handleInputChange}></input>
        </div>
    );
  }
}

export default Search;
