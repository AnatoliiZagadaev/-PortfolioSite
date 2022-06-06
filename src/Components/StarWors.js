import React from "react";
 

export default class Starswar extends React.Component{
    state = {
        starswars: []
      };
    
      getData = async () => {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        console.log("data", data);
        this.setState({ starswars: data.results });
      };
    
      componentDidMount() {
        this.getData();
      }
    
      render() {
        const { starswars } = this.state;
        return (
          <div >
            <h1>The Star Wars Person</h1>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Height</td>
                  <td>Eye color</td>
               </tr>
                   {starswars.map(({name,height,eye_color}) => (
                 <tr key={name}>
                    <td>{name} </td>
                   <td>{height} </td>
                   <td>{eye_color}</td>
               </tr>
                ))};
            </tbody>
        </table>
    </div>
    )
}
}
      
    
    