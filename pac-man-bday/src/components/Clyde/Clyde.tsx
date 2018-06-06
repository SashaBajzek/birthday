import * as React from 'react';

import Ghost from '../Ghost/Ghost';

interface IProps {
  clydeDirection: string,
}

class Clyde extends React.Component<IProps, any> {
  public render() {
    const { clydeDirection } = this.props;
    return (
      <div>
				<Ghost direction={clydeDirection} ghostName="Clyde" />
			</div>
    );
  }
}

export default Clyde;
