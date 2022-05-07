import React from "react";

class FotoComments extends React.Component{

    constructor(){
        super();
        this.state={
         comment :[]
        }
        this.refComment = React.createRef();
    }

    addComment = () =>{
        let comment = this.refComment.current.value;
        let fotoComments= this.state.comment;
        fotoComments.push(comment);
        this.setState({
            'fotoComments':fotoComments
        });
        this.refComment.current.value='';
    }
    render(){
        return(
         <>
            <div>
                <textarea ref={refComment}></textarea>
            </div>
            <div>
                <button onClick = {addComment}>add comment</button>
            </div>
            <div>
                <ul>
                    {this.state.comment.map((item,index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
         </>
        );
    }
}

export default FotoComments;