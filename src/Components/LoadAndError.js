import React from 'react';
// import Photographer from '../image/Photographer.png';
/* eslint linebreak-style: ["error", "windows"] */
export default class LoadAndError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  render() {
    const { imageStatus } = this.state;
    const { Photographer } = this.state;
    return (
      <div>
        <img
          src={Photographer}
          onLoad={() => this.handleImageLoaded}
          onError={() => this.handleImageErrored}
          alt="Photographer"
        />
        {imageStatus}
      </div>
    );
  }
}
