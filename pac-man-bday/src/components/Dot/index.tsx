import * as React from 'react';
import './Dot.css';

interface IProps {
  dotSize: string
}

class Dot extends React.Component<IProps, object> {
  public getClassNames = (dotSize: string) => (
    `dot__${dotSize} dot__${dotSize}--flashing`
  )

  public render() {
    const { dotSize } = this.props;
    return (
      <div className={`Dot ${this.getClassNames(dotSize)}`} />
    );
  }
}

export default Dot;
