 import React, {Component} from "react";
 

export default class Header extends Component{ 
    render(){
        return(
            <div>
         <header className="menu">
            <span className="container">
                    <span className="row">        
                       <span className="logo"></span>
                      <span>
                      <span className="font_bolt">Julia Jacobson</span>
                        <br/> The Photographer</span>
                     </span>
                  <span className="font_bolt">
       <nav>
           <ul>
               <li><a className="link" href="About">About</a></li>
               <li><a className="link" href="Portfolio">Works</a></li>
               <li><a className="link" href="Instagramm">Instagramm</a></li>
               <li><a className="link" href="Personal">Personal details</a></li>
           </ul>
       </nav>
   </span>
</span>
</header>
   
      
</div>

)}};