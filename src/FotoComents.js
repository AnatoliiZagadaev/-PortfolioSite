import React from "react";

class FotoComments extends React.Component{

    constructor(){
        super();
        this.state={
         comment :[]
        }
        this.addComment=this.addComment.bind(this);
    }

    addComment (event){
        this.setState({comment:event.target.value});       
     
    }
    render(){
        return(
         <>
            <div>
                <textarea comment = {this.state.value} onChange={this.addComment}/>
                <button onClick = {this.comment}>add comment</button>
                <ul>
                    {this.state.comment.slice(0,1).map((item,index)=><li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
         </>
        );
    }
}

export default FotoComments;