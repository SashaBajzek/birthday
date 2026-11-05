import * as React from 'react';

class Item extends React.Component<any, any> {
  public state = {
    eaten: false,
    type: "dot__small",
    value: 10
  }
  public render() {
    return (
      <div>Item</div>
    );
  }
}

export default Item;