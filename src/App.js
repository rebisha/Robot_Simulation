import React, { Component } from 'react';
import './App.css';

import TableTop from './component/TableTop/index';
import StatusBar from './component/StatusBar/index';
import Direction from './component/Direction/index';
import Position from './component/Position/index';
import Robot from './component/Robot/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      X: 0,
      Y: 0,
      isPlaced: false,
      message: ''
    };
  }

  robotPosition = (x, y) => {
    if(x<0 || x>4 || y<0 || y>4) {
      this.setState ({
        message: 'Robot is off the table. Please provide a valid input.'
      });
      return;
    } else {
      this.setState({
        X: x,
        Y: y,
        isPlaced: true,
        message : ''
      });
    }

  }

  moveRight = () => {
    const value = this.state.X;
    const xPos = value + 1;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }

    this.robotPosition(xPos, this.state.Y);
  }

  moveLeft = () => {
    const value = this.state.X;
    const xPos = value - 1;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }

    this.robotPosition(xPos, this.state.Y);
  }

  moveUp = () => {
    const value = this.state.Y;
    const yPos = value - 1;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }

    this.robotPosition(this.state.X, yPos);
  }

  moveDown = () => {
    const value = this.state.Y;
    const yPos = value + 1;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }

    this.robotPosition(this.state.X, yPos);
  }

  render () {
    const { X, Y, isPlaced, message } = this.state;
    return (
      <div className="App">
        <div className="col-6 table-top">
          <TableTop />
          <Robot xPosition={X} yPosition={Y} isPlaced={isPlaced} />

        </div>

        <div className="col-6 navigate">
          <StatusBar xPosition={X} yPosition={Y} />
          <Direction moveRight={this.moveRight} moveLeft={this.moveLeft} moveUp={this.moveUp} moveDown={this.moveDown}/>
          <Position robotPosition={this.robotPosition}/>
        </div>
        <h3 className="message">{message}</h3>
      </div>
    );
  }
}

export default App;
