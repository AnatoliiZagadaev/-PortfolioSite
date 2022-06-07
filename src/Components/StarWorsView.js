import React from "react";
import  "./StarWors";

function Tables(props){
    return(
        <div >
        <h1>The Star Wars Person</h1>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Height</td>
              <td>Eye color</td>
           </tr>
               {props.Starswars.map(({name,height,eye_color}) => (
             <tr key={name}>
                <td>{name} </td>
               <td>{height} </td>
               <td>{eye_color}</td>
           </tr>
            ))};
        </tbody>
    </table>
</div>

);
}
export default Tables;