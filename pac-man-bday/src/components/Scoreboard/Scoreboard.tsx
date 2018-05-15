import * as React from 'react';

import './Scoreboard.css';

interface IProps {
  score: number
}

class Scoreboard extends React.Component<IProps, any> {
  public render() {
    const { score } = this.props;
    return (
      <div className='Scoreboard'>
        <h3 className='Scoreboard__heading'>Score: {score}</h3>
      </div>
    );
  }
}

export default Scoreboard;
