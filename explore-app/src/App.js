import React, { Component } from 'react';
import './App.css';
import { Header } from './Header.js'
import {Radio, FormGroup, Form, FormControl, ControlLabel, PageHeader, ButtonToolbar, Button} from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      calories: 0,
      height: 0,
      weight: 0,
      age: 0,
      sex: false
    };
  }

  toggleAddMeal() {
    this.setState({
      isAddingMeal: !this.state.isAddingMeal
    });
  }

  calculateBMR() {
    let bmr =  (4.54 * this.state.weight) + (15.875 * this.state.height) - (5 * this.state.age);
    console.log(this.state);
    return this.state.sex ? bmr - 161 : bmr + 5
  }

  handleHeightChange(e) {
    this.setState({
      height: e.target.value,
      calories: this.calculateBMR()
    })
  }

  handleWeightChange(e) {
    this.setState({
      weight: e.target.value,
      calories: this.calculateBMR()
    })
  }

  handleAgeChange(e) {
    this.setState({
      age: e.target.value,
      calories: this.calculateBMR()
    })
  }

  handleSexChange(e) {
    this.setState({
      sex: !this.state.sex,
      calories: this.calculateBMR()
    })
  }

  render() {
    var shown = {
      display: this.state.isAddingMeal ? "block" : "none"
    };
    
    var hidden = {
      display: this.state.isAddingMeal ? "none" : "block"
    }

    var userData = {
      calories: this.state.calories.toFixed(0),
      fats: ((this.state.calories * .25) / 4).toFixed(0),
      protein: ((this.state.calories * .15) / 9).toFixed(0),
      carbohydrates: ((this.state.calories * .6) / 4).toFixed(0)
    }

    return (
      <div className="App">
        <header className="App-header">
          <Header userData={userData}/>          
          <div>
            <Form>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Height</ControlLabel>{' '}
                <FormControl type="text" pattern="[0-9]*" value={ this.state.height } onChange = { this.handleHeightChange.bind(this) }/>
              </FormGroup>{' '}
              <FormGroup controlId="formInlineName">
                <ControlLabel>Weight</ControlLabel>{' '}
                <FormControl type="text" pattern="[0-9]*" value={ this.state.weight } onChange = { this.handleWeightChange.bind(this) }/>
              </FormGroup>{' '}
              <FormGroup controlId="formInlineName">
                <ControlLabel>Age</ControlLabel>{' '}
                <FormControl type="text" pattern="[0-9]*" value={ this.state.age } onChange = { this.handleAgeChange.bind(this) }/>
              </FormGroup>{' '}
              <FormGroup>
                <Radio value={ this.state.sex } onChange = { this.handleSexChange.bind(this) } name="radioGroup" inline>
                  Male
                </Radio>{' '}
                <Radio value={ this.state.sex } onChange = { this.handleSexChange.bind(this) } name="radioGroup" inline>
                  Female
                </Radio>{' '}                              
              </FormGroup>
            </Form>
          </div>          
        </header>
      </div>
    );
  }
}

export default App;
