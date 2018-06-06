import * as React from 'react';

import Ghost from '../Ghost/Ghost';

interface IProps {
  blinkyDirection: string,
}

class Blinky extends React.Component<IProps, any> {
  public render() {
    const { blinkyDirection } = this.props;
    return (
      <div>
				<Ghost direction={blinkyDirection} ghostName="Blinky" />
			</div>
    );
  }
}

export default Blinky;
