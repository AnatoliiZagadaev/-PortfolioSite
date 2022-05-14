import React from "react";


class FotoComments extends React.Component{

    constructor(props){
        super(props);
        this.state={
         comment :[]
        }
        this.refComment = React.createRef();
    }

    addComment =()=>{
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
                <textarea ref={this.refComment}></textarea>
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
  

