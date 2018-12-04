import React, { Component } from 'react';
import './App.css';
import {FormGroup, Form, FormControl, ControlLabel, PageHeader, ButtonToolbar, Button} from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAddingMeal: false
    };
    this.props = {
      protein: 0,
      fat: 0,
      carbs: 0
    };
  }

  toggleAddMeal() {
    this.setState({
      isAddingMeal: !this.state.isAddingMeal
    });
  }

  updateMacros() {
    this.setState({
      protein: 69
    });
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
          <h2> Protein: { this.props.protein } </h2>
          <h2> Carbohydrates: </h2>
          <h2> Fat: </h2>
          <h2> Calories: </h2>
          <h2> BMR: </h2>
          <ButtonToolbar>
            <div style = {hidden}>
              <Button bsStyle="success" onClick={this.toggleAddMeal.bind(this)}>Add Meal</Button>
            </div>
            <div style = {shown}>
              <Button bsStyle="danger" onClick={this.toggleAddMeal.bind(this)}>Cancel</Button>
            </div>
          </ButtonToolbar>
          <div>
            <form style={ shown }>
              <Form>
                <FormGroup controlId="formInlineName">
                  <ControlLabel>Protein</ControlLabel>{' '}
                  <FormControl type="text" placeholder="69" />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineEmail">
                  <ControlLabel>Carbohydrates</ControlLabel>{' '}
                  <FormControl type="text" placeholder="420" />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineEmail">
                  <ControlLabel>Fat</ControlLabel>{' '}
                  <FormControl type="text" placeholder="42069" />
                </FormGroup>{' '}
                <Button onClick={this.updateMacros.bind(this)}>Submit</Button>
              </Form>
            </form>
          </div>          
        </header>
      </div>
    );
  }
}

export default App;
