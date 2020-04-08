import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';
import CreatureList from '../CreatureList/CreatureList';

const list = [1,2,3,4];

const newlist = [...list, 6];
// [1,2,3,4,6]

const obj = {
  name: 'Myron',
}

const newObj = {
  ...obj,
  age: 37
}
// {
//   name: 'Myron',
//   age: 37
// }

class App extends Component {
  state ={
    creatures: [
      {
        name: 'Unicorn',
        origin: 'Kansas City',
      },
      {
        name: 'Sphinx',
        origin: 'Egypt',
      },
      {
        name: 'Kappa',
        origin: 'Japan',
      },
      {
        name: 'Dryad',
        origin: 'Isles',
      }
    ],
  }

  render() {
    // const creatureElements = [];

    // for (let i = 0; i < this.state.creatures.length; i++) {
    //   creatureElements.push(
    //     <li>{this.state.creatures[i]}</li>
    //   );
    // }

    // forEach LOOP
    // this.state.creatures.forEach((item, index) => {
    //   creatureElements.push(<li>{item}</li>);
    // });

    // map LOOP
    // const creatureElements = this.state.creatures.map((item, index) => {
    //   return <li key={index}>{item.name} is from {item.origin}</li>;
    // });
    // const creatureElements = this.state.creatures.map((item) => <li>{item}</li>);

    return (
      <div>
        <Header />

        <div className="container">
          {/* this.state.creatures */}

          {/* new creature form */}

          {/* <div>
            <h2>Creature Elements:</h2>
            <ul>
              {creatureElements}
            </ul>
          </div> */}
          <CreatureList
            kittykat={this.state.creatures}
          />

          <pre>
            {JSON.stringify(this.state.creatures)}
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
