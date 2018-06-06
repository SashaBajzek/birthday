import * as React from 'react';

import Ghost from '../Ghost/Ghost';

interface IProps {
  inkyDirection: string,
}

class Inky extends React.Component<IProps, any> {
  public render() {
    const { inkyDirection } = this.props;
    return (
      <div>
				<Ghost direction={inkyDirection} ghostName="Inky" />
			</div>
    );
  }
}

export default Inky;

