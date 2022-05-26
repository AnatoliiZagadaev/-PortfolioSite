import React from "react";
import '../Components/FotoComents';

function ItemList(props){
return (
    <div>	
        <form  onSubmit={this.addComment.bind(this)}>
            <textarea value={this.state.value}	onChange={this.handleChange.bind(this)}/>
            <input type="submit" className='actionBtn'/>
        </form>
       <ul>
         {this.state.items.slice(0,1).map((item, index) => {return <li key={index}>{item}</li>})}
        </ul>
    </div>
);
}