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
        message: 'Robot is off the table, please choose valid points'
      });
      return;
    } else {
      this.setState({
        X: x,
        Y: y,
        isPlaced: true,
      });
    }

  }

  moveRight = () => {
    const xPos = this.state.X;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }
    return this.setState({
      X: xPos + 1,
    });
  }

  moveLeft = () => {
    const xPos = this.state.X;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }
    return this.setState({
      X: xPos - 1,
    });
  }

  moveUp = () => {
    const yPos = this.state.Y;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }
    return this.setState({
      Y: yPos - 1,
    });
  }

  moveDown = () => {
    const yPos = this.state.Y;

    if(!this.state.isPlaced) {
      this.setState({
        message: 'Robot is not yet placed on the table'
      });
    }
    return this.setState({
      Y: yPos + 1,
    });
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
