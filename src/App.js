import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import classes from './App.css';
import Car from './Car/Car';
//import AnimatedCar from './AnimatedCar/AnimatedCar';

class App extends Component {
  state = {
    cars: [
      { id: 'a1', name: 'Jaguar', color: 'black' },
      { id: 'a2', name: 'BMW', color: 'red' },
      { id: 'b2', name: 'Audi', color: 'white' },
      { id: 'b6', name: 'Mercedes', color: 'green' }
    ],
    showCars: false
  }
  switchColorHandler = (newColor) => {
    this.setState({
      cars: [
        { id: 'a1', name: 'Jaguar', color: newColor },
        { id: 'a2', name: 'BMW', color: 'red' },
        { id: 'b2', name: 'Audi', color: 'white' },
        { id: 'b6', name: 'Mercedes', color: 'green' }
      ]
    });
  }
  colorChangedHandler = (event, id) => {
    const carIndex = this.state.cars.findIndex(car => {
      return car.id === id;
    });
    //const car = Object.assign({}, this.state.cars[carIndex]);
    const car = { ...this.state.cars[carIndex] };
    car.color = event.target.value;
    const cars = [...this.state.cars];
    cars[carIndex] = car;
    this.setState({
      cars: cars
    });
  }
  toggleCarsHandler = () => {
    const shows = this.state.showCars;
    this.setState({ showCars: !shows });
  }
  deleteCarHandler = (carIndex) => {
    //const cars = this.state.cars.splice();
    const cars = [...this.state.cars];
    cars.splice(carIndex, 1);
    this.setState({ cars: cars });
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let classes1 = [];
    if (this.state.cars.length <= 2) {
      classes1.push(classes.red);
    }
    if (this.state.cars.length <= 1) {
      classes1.push(classes.bold);
    }
    const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.alt ? 'lightcoral' : 'lightgreen'};
        color: black;
      }
    `;
    let btnClass = [classes.Button];
    let cars = null;
    if (this.state.showCars) {
      cars = (
        <div>
          {this.state.cars.map((car, index) => {
            return <Car
              name={car.name}
              color={car.color}
              click={() => this.deleteCarHandler(index)}
              changed={(event) => this.colorChangedHandler(event, car.id)}
              key={car.id} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightcoral',
        color: 'black'
      }
      btnClass.pop();
      btnClass.push(classes.Cyan);
    }
    return (
      <StyleRoot>
        <div className={classes.App}>
          <h1>Basic React App</h1>
          <p className={classes1.join(' ')}>Here are some cars:-</p>
          {/* <StyledButton alt={this.state.showCars} onClick={this.toggleCarsHandler}>
            Toggle Cars
          </StyledButton> */}
          <button style={{backgroundColor: 'red'}} onClick={this.toggleCarsHandler} >
            Toggle Cars
          </button>
          {cars}
          {/* <AnimatedCar /> */}
        </div>
      </StyleRoot>
    );
  }
}
export default App;