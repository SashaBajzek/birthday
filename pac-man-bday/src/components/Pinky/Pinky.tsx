import * as React from 'react';

import Ghost from '../Ghost/Ghost';

interface IProps {
  pinkyDirection: string,
}

class Pinky extends React.Component<IProps, any> {
  public render() {
    const { pinkyDirection } = this.props;
    return (
      <div>
				<Ghost direction={pinkyDirection} ghostName="Pinky" />
			</div>
    );
  }
}

export default Pinky;
