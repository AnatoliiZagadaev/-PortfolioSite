import React from 'react';

class FotoComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], comment: '' };
  }

  addComment = (event) => {
    this.setState(({ comments, comment }) => ({ comments: [...comments, comment] }));
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    const { comment, comments } = this.state;
    return (
      <div>
        <form onSubmit={this.addComment}>
          <textarea value={comment} onChange={this.handleChange} />
          <input type="submit" className="actionBtn" />
        </form>
        <ul>
          {comments.slice(0, 1).map((item) => { return <li key={item.id}>{item}</li>; })}
        </ul>
      </div>
    );
  }
}

export default FotoComments;
