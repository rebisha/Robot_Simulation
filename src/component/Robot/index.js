import React, { useEffect } from 'react';
import './_robot.scss';
import svg from '../../assets/robot.svg';

const Robot = ({xPosition, yPosition, isPlaced}) => {

    useEffect(() => {
        const getRobot = document.getElementById('robot');

        if(!isPlaced) {
            getRobot.style.display = 'none';
            return ;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        xPosition = xPosition * 100  + 25;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        yPosition = yPosition * 100 + 25;
        getRobot.style.display = 'block';
        getRobot.style.transform = 'translate(' + xPosition + 'px,' + yPosition + 'px)';
    });

    return (
        <div>
            <img id='robot' src={svg} alt="robot" />
        </div>
    );
};

export default Robot;