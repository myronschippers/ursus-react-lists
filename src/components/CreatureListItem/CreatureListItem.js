import React, { Component } from 'react';

class CreatureListItem extends Component {
  render() {
    const item = this.props.kittykat;

    return (
      <li>
        {item.name} is from {item.origin}
      </li>
    )
  }
}

export default CreatureListItem;