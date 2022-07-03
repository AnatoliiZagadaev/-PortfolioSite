import React from 'react';
// import Photographer from '../image/Photographer.png';
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
    const { imageStatus, Photographer } = this.state;
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
