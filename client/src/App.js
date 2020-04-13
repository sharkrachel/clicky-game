import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters, 
      score: 0,
      clickedCharacters: []
    }
  }

  handleClick () {

  }

  shuffleCards () {

  }

  scoreTally () {

  }

  checkWinLose () {

  }

  resetGame () {

  }

  gameWon () {

  }

  

  render() {
    return (
      <Container>
        <Row>
          {this.state.characters.map(character => {
            return (

              <Column column="col-sm-3">
                <CharacterCard
                  image={character.image}
                />
              </Column>
            )
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
