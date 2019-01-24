import React, { Component } from 'react';
import ChappelleCard from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import chappelle from "./chappelle.json";

class App extends Component {
  state = {
    chappelle
  };


  render() {
    return (
      <Wrapper>
        <Header>Bring Back The Chappelle Show!</Header>
        {this.state.chappelle.map(chappelle => (
          <ChappelleCard
            id={chappelle.id}
            key={chappelle.id}
            character={chappelle.character}
            img={chappelle.img}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
