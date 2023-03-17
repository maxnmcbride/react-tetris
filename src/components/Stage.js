import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';

const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
        {/* this is in curly braces because we are in JavaScript */}
        </StyledStage>
        );

        export default Stage;