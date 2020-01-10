import React, { Component } from "react";

import Header from "./components/Header";
import Image from "./components/Image";
import Result from "./components/Result";
import imagesData from "./images.json";

class App extends Component {
    state = {
        images: imagesData,
        score: 0,
        topScore: 0,
        correct: null
    };

    clicked = clickedId => {
        this.shuffleImages(this.state.images);
        const clickedImage = this.state.images.find(
            image => image.id === clickedId
        );

        if (clickedImage.isClicked) {
            this.setState({ correct: false });
            return this.resetGame(false);
        } else if (this.state.score === 11) {
          this.setState({ topScore: this.state.score + 1})
          this.resetGame(true)
        } else {
            this.setState(prevState => {
                const updatedImages = prevState.images.map(image => {
                    if (image.id === clickedId) {
                        image.isClicked = true;
                    }
                    return image;
                });

                let newScore = prevState.score + 1;
                let newTopScore = prevState.topScore;
                if (newScore > prevState.topScore) {
                    newTopScore = newScore;
                }

                return {
                    images: updatedImages,
                    score: newScore,
                    topScore: newTopScore,
                    correct: "true"
                };
            });
        }
    };

    shuffleImages = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState({
            images: array
        });
    };

    resetGame = (hasWon) => {
        this.setState(prevState => {
            const updatedImages = prevState.images.map(image => {
                if (image.isClicked) {
                    image.isClicked = false;
                }
                return image;
            });
            return {
                images: updatedImages,
                score: 0,
                correct: (hasWon ? "win" : false)
            };
        });
    };

    render() {
        return (
            <div>
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <div className="container">
                    <div className="images">
                        {this.state.images.map(image => (
                            <Image
                                key={image.id}
                                clicked={this.clicked}
                                image={image}
                            />
                        ))}
                    </div>
                </div>
                <Result key={this.state.score} correct={this.state.correct} />
            </div>
        );
    }
}

export default App;
