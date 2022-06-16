import React, { Component } from 'react';

export default class FotoCommentsLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ''
    };
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) });
    }
  }

  addComment = () => {
    this.setState(
      (prevState) => ({
        comments: [
          ...prevState.comments,
          {
            id: prevState.comments.length ? prevState.comments.reduce((p, c) => (p.id > c.id ? p : c)).id + 1 : 1, // max id +1
            comment: this.state.comment,
          }
        ],
        comment: ''
      }),
      () => {
        return localStorage.setItem('state', JSON.stringify(this.state));
      }
    );
  };

  removeComment = (id) => {
    this.setState((prevState) => ({
      comments: prevState.comments.filter((comment) => comment.id !== id)
    }), () => localStorage.setItem('state', JSON.stringify(this.state)));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { comment } = this.state;
    const { comments } = this.state;
    return (
      <div>
        <textarea name="comment" value={comment} onChange={this.handleChange} />
        <button onClick={this.addComment}>Add Comment</button>
        {comments.map((comment) => (
          <div key={comment.id}>
            {comment.id}
            .
            {comment.comment}
            <button onClick={() => this.removeComment(comment.id)}>Remove Comment</button>
          </div>
        ))}
      </div>
    );
  }
}
