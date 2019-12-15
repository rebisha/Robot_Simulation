import React from 'react';
import Square from '../Square/index';
import './_row.scss';

const Row = () => {
    return (
        <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
};

export default Row;