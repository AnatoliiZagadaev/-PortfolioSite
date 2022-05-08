import React from "react";

class FotoComments extends React.Component{

    constructor(props){
        super(props);
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
                <textarea type ="text" value = {this.state.value} onChange={this.addComment}/>
                <button onClick = {this.addComment}>add comment</button>
                <ul>
                    {this.state.comment.slice(0,1).map((item,index)=><li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
         </>
        );
    }
}

export default FotoComments;