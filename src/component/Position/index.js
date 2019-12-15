import React, { Component } from 'react';
import Button from '../Button/index';
import './_position.scss';

class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            X: 0,
            Y: 0
        }
    }

    handleXChange = (e) => {
        this.setState ({
            X: parseInt(e.target.value)

        });
    }

    handleYChange = (e) => {
        this.setState({
            Y: parseInt(e.target.value)
        });
    }

    setPosition = () => {
        this.props.robotPosition (
            this.state.X,
            this.state.Y
        );
    }

    render () {
        const { X, Y } = this.state;
        return (
            <div className="set-position">
                <input type="text" placeholder="X" x={X} onChange={this.handleXChange} className="position"/>
                <input type="text" placeholder="Y"  y={Y} onChange={this.handleYChange} className="position" />
                <Button className="btn" text='Set position' onClick={this.setPosition} />
            </div>
        );
    }
};

export default Position;