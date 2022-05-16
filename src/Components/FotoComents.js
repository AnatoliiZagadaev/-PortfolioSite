

import React from 'react'

class FotoComments extends React.Component{

  state = {
    comments: [],
    comment: ''
  }

  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          comment: this.state.comment,
        }
      ],
        comment: ''
    })
  }
  removeComment = (id) => {
    this.setState({comments: this.state.comments.filter(comment => comment.id !== id )})
  }
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
  }
  render(){
    return(
      <div>
          <textarea name="comment" value={this.state.comment}onChange={this.handleChange}></textarea>
          <button onClick={this.addComment}>Add Comment</button>
        {this.state.comments.map(comment => <div key={comment.id}>{comment.id}.{comment.comment}
          <button onClick={this.removeComment.bind(null, comment.id)}>Remove Comment</button>
        </div>)}
      </div>
    )
  }
}




   /* constructor(props){
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
}*/
export default FotoComments;
