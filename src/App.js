import React, { Component } from 'react';

import Wrapper from './components/Wrapper/Wrapper'
import Images from './components/Images/Images'
import images from './images.json';

class App extends Component {
  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        <Images />
      </Wrapper>
    )
  }
}

export default App;
