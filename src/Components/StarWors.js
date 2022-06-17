import React from 'react';
import Tables from './StarWorsView';

export default class Starswar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Starswars: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    this.setState({ Starswars: data.results });
  };

  render() {
    const { Starswars } = this.state;
    return (
      <Tables Starswars={Starswars} />
    );
  }       
}
