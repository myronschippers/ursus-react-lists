import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  state = {
    creaturesList: ['Unicorn', 'Sphinx', 'Kappa', 'Dryad']
  }

  render() {
    // restructure array to use elements for visual presentation
    // const creatureElements = [];

    // using basic for loop
    // for (let i = 0; i < this.state.creaturesList.length; i++) {
    //   creatureElements.push(
    //     <li>{this.state.creaturesList[i]}</li>
    //   );
    // }

    // using forEach loop
    // this.state.creaturesList.forEach((item, index) => {
    //   creatureElements.push(
    //     <li key={index}>{item}</li>
    //   );
    // });

    // using map loop
    const creatureElements = this.state.creaturesList.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    // const creatureElements = this.state.creaturesList.map((item, index) => <li key={index}>{item}</li>);

    return (
      <div>
        <Header />

        <div className="container">
          {this.state.creaturesList}

          <h2>Creature Elements</h2>
          <ul>
            {creatureElements}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
