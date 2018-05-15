import * as React from 'react';
import './Pacman.css';

interface IProps {
  pacmanDirection: string,
  pacmanMouth: boolean
}

class Pacman extends React.Component<IProps, any> {
  public render() {
    const { pacmanDirection, pacmanMouth } = this.props;
    return (
      <div className={`Pacman Pacman--${pacmanDirection} ${pacmanMouth ? 'Pacman--open' : 'Pacman--closed'}`} />
    );
  }
}

export default Pacman;
