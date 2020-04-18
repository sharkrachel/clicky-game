import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Jumbotron from "./components/Jumbotron"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters,
      score: 0,
      highScore: 0,
      clickedCharacters: []
    }
    this.shuffleCards();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(character) {
    this.checkWinLose(character);

  }

  shuffle(cardArray) {
    for (let i = cardArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
    return cardArray;
  }

  shuffleCards() {
    const currentCharacters = this.state.characters;
    const newCharacters = this.shuffle(currentCharacters);
    this.setState({ characters: newCharacters })
  }

  incrementScore() {
    if (this.state.score === this.state.highScore) {
      this.setState({ highScore: this.state.highScore + 1 });
      this.setState({ score: this.state.score + 1 });
    }
    else {
      this.setState({ score: this.state.score + 1 });
    }
  }

  checkWinLose(character) {
    const { id } = character;
    const isAlreadyClicked = this.state.clickedCharacters.find(storedId => {
      console.log("stored: ", storedId);
      console.log("id: ", id);
      return storedId === id;


    });
    console.log("Already clicked?: ", isAlreadyClicked)
    if (isAlreadyClicked) {
      this.gameLose();
    }
    else if (this.state.score === 11) {
      this.incrementScore();
      this.gameWon();
    }
    else {
      let { clickedCharacters } = this.state;
      clickedCharacters = [].concat(clickedCharacters);
      clickedCharacters.push(id);
      this.setState({ clickedCharacters });
      this.incrementScore();
      this.shuffleCards();

    }
    console.log("clicked characters check win: ", this.state.clickedCharacters)
  }

  resetGame() {
    this.setState({
      score: 0,
      clickedCharacters: []
    });

  }

  gameWon() {
    this.resetGame();
  }

  gameLose() {

    this.resetGame();
  }

  render() {
    return (
      <Container>
        <Jumbotron >
          <div>
            <h3>SCORE: {this.state.score} | HIGH SCORE: {this.state.highScore}</h3>
          </div>
        </Jumbotron>
        <Row row="row justify-content-md-center">
          {this.state.characters.map(character => {
            return (
              <Column column="col-sm-3-auto">
                <CharacterCard
              
                  image={character.image}
                  onClick={() => {
                    this.handleClick(character)
                  }
                  }
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
