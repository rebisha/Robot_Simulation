import React, { Component } from 'react';
import Button from '../Button/index';

class Direction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            X: 0,
            Y: 0
        };
    }

    handleLeft = () => {
        this.props.moveLeft();
    }

    handleRight = () => {
        this.props.moveRight();
    }

    handleUp = () => {
        this.props.moveUp();
    }

    handleDown = () => {
        this.props.moveDown();
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleLeft} text='Left' />
                <Button onClick={this.handleRight} text='Right' />
                <Button onClick={this.handleUp} text='Up' />
                <Button onClick={this.handleDown} text='Down' />
            </div>
        );
    }



};

export default Direction;