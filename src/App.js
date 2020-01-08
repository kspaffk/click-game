import React, { Component } from 'react';

import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Image from './components/Image'
import images from './images.json';

class App extends Component {
  state = {
    images,
    score: 0,
  };

  clicked = event => {
    const { id } = event.target
    
    console.log(`clicked`, event.target, id)
    this.shuffleImages(images);
  };

  shuffleImages = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      this.setState({
        images: array
      })
    }
  
    return array;
  };

  render() {
    return (
      <Wrapper>
        <div>
          <Header />
        </div>
        <div className="images">
          {this.state.images.map(image => <Image key={image.id} clicked={this.clicked} image={image}/>)}
        </div>
      </Wrapper>
    )
  }
}

export default App;