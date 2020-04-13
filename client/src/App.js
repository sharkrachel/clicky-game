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
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick() {
    console.log("clicked");
  }

  shuffleCards() {

  }

  scoreTally() {

  }

  checkWinLose() {

  }

  resetGame() {

  }

  gameWon() {

  }



  render() {
    return (
      <Container>
        <Row>
          {this.state.characters.map(character => {
            return (
              <Column key={character.id} column="col-sm-3">

                <CharacterCard
                  image={character.image}

                  onClick={this.handleClick}
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
