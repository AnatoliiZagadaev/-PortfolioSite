import React from "react";
import  Tables from '../Components/StarWorsView'

export default class Starswar extends React.Component{
    state = {
        Starswars: []
      };
    
      getData = async () => {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        this.setState({ Starswars: data.results });
      };
    
      componentDidMount() {
        this.getData();
      }
      render(){
        const { Starswars } = this.state;
        return (
        <Tables Starswars={Starswars}/>
);
}       
}
      
    
    