import * as React from 'react';

import './PacmanMoves.css';

export interface IProps {
  onMovePacmanDown?: () => void;
  onMovePacmanLeft?: () => void;
  onMovePacmanRight?: () => void;
  onMovePacmanUp?: () => void;
  pacmanX?: number;
  pacmanY?: number;
}

function PacmanMoves({ pacmanX = 0, pacmanY = 0, onMovePacmanDown, onMovePacmanLeft, onMovePacmanRight, onMovePacmanUp }: IProps) {
  return (
    <div className='PacmanMoves'>
      <h3>Pacman Location</h3>
      <p>Pacman X { pacmanX }</p>
      <p>Pacman Y { pacmanY }</p>
      <button onClick={onMovePacmanLeft}>Left</button>
      <button onClick={onMovePacmanRight}>Right</button>
      <button onClick={onMovePacmanUp}>Up</button>
      <button onClick={onMovePacmanDown}>Down</button>
    </div>
  )
}

export default PacmanMoves;
