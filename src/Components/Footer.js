import React, {Component} from "react";

export default class Footer extends Component{ 
    render(){
        return(
            <footer>
                <section>
               <span className="container">
                   <p>© Copyright 2018-2020 Julia Jacobson</p>
               </span>
                <span className="autor">
                    <p>Created by Anatoliy Zagadaev</p>
                    <a href="https://github.com/AnatoliiZagadaev">https://github.com/AnatoliiZagadaev</a>
                </span>
                </section>
           </footer>
        )
    }

};