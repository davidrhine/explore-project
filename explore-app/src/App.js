import React, { Component } from 'react';
import './App.css';
import {PageHeader, ButtonToolbar, Button} from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAddingMeal: false,
    };
  }

  toggleAddMeal() {
    this.setState({
      isAddingMeal: !this.state.isAddingMeal
    });
  }

  addMeal() {

  }

  render() {
    var shown = {
      display: this.state.isAddingMeal ? "block" : "none"
    };
    
    var hidden = {
      display: this.state.isAddingMeal ? "none" : "block"
    }

    return (
      <div className="App">
        <header className="App-header">
          <PageHeader>
            Daily Counts
          </PageHeader>
          <h2> Protein: </h2>
          <h2> Fat: </h2>
          <h2> Carbohydrates: </h2>
          <h2> Calories: </h2>
          <h2> BMR: </h2>
          <ButtonToolbar>
            <Button bsStyle="success" onClick={this.toggleAddMeal.bind(this)}>Add Meal</Button>
          </ButtonToolbar>
          <div>
            <h2 style={ shown }>this.state.shown = true</h2>
             
          </div>

          <form>
            <label>
              Name:  
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
