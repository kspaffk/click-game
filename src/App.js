import React, { Component } from 'react'

import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Image from './components/Image'
import imagesData from './images.json'

class App extends Component {
  state = {
    images: imagesData,
    score: 0,
    topScore: 0
  }

  clicked = clickedId => {
    this.shuffleImages(this.state.images);
    const clickedImage = this.state.images.find(image => image.id === clickedId)

    if (clickedImage.isClicked) {
      return this.resetGame()
    } else {
    this.setState(prevState => {
      const updatedImages = prevState.images.map(image => {    
        if (image.id === clickedId) {
          image.isClicked = true
        }
        return image
      })

      let newScore = prevState.score + 1
      let newTopScore = prevState.topScore
      if (newScore > prevState.topScore) {
        newTopScore = newScore
      }

      return (
        { images: updatedImages, score: newScore, topScore: newTopScore }
        )
      })
    }
  }

  shuffleImages = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({
      images: array
    })
   }

   resetGame = () => {
    this.setState(prevState => {
      const updatedImages = prevState.images.map(image => {    
        if (image.isClicked) {
          image.isClicked = false
        }
        return image
      })
    return ({
      images: updatedImages,
      score: 0
    })
   })
  }

  render() {
    return (
      <Wrapper>
        <div>
          <Header score={this.state.score} topScore={this.state.topScore}/>
        </div>
        <div className="container">
          <div className="images">
            {this.state.images.map(image => <Image key={image.id} clicked={this.clicked} resetGame={this.resetGame} image={image}/>)}
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default App;