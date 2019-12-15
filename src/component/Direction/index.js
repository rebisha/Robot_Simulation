import React from 'react';
import Button from '../Button/index';

const Direction = ({ moveRight, moveLeft, moveUp, moveDown }) => {
    const handleLeft = () => {
        moveLeft();
    }

    const handleRight = () => {
        moveRight();
    }

    const handleUp = () => {
        moveUp();
    }

    const handleDown = () => {
        moveDown();
    }

    return (
        <div>
            <Button onClick={handleLeft} text='Left' />
            <Button onClick={handleRight} text='Right' />
            <Button onClick={handleUp} text='Up' />
            <Button onClick={handleDown} text='Down' />
        </div>
    );



};

export default Direction;