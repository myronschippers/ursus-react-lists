import React, { Component } from 'react';
import CreatureListItem from '../CreatureListItem/CreatureListItem';

class CreatureList extends Component {
  render() {
    // make elements list for display
    const creatureElements = this.props.kittykat.map((item, index) => {
      return <CreatureListItem key={index} kittykat={item} />;
    });

    return (
      <div>
        <h2>Creature Elements:</h2>
        <ul>
          {creatureElements}
        </ul>
      </div>
    )
  }
}

export default CreatureList;
