import React, { Component } from "react";

class FotoCommentsLifeCycle extends Component {       
  
    state = {
    comments: [],
    comment: ''

  }

  componentDidMount=()=>{
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
  }
  componentWillUnmount=()=>{
    clearInterval(this.localStorage)
  }
  addComment=()=> {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          comment: this.state.comment,
          
        }
      ],
        comment: ''
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
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
          <button onClick={() => this.removeComment(comment.id)}>Remove Comment</button>
        </div>)}
      </div>
    )
  }
}


export default FotoCommentsLifeCycle
