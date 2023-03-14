import React from 'react';
import Cell from './Cell';

const Stage = ({ stage }) => (
    <div>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
        {/* this is in curly braces because we are in JavaScript */}
    </div>
)

export default Stage;