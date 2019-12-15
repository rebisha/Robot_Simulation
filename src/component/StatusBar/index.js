import React from 'react';
import './_statusBar.scss';

const StatusBar = ({ xPosition, yPosition }) => {
    return(
        <div className="wrapper">
            <label className="label">Status: </label>
            <div className="status-bar">
                <h3>X position: {xPosition}</h3>
                <h3>Y position: {yPosition}</h3>
            </div>
        </div>
    );
}

export default StatusBar;