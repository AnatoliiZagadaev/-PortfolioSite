import React from 'react';
import './Form.css';

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
    const { comment } = this.state;
    const { comments } = this.state;
    return (
      <div>	
        <form onSubmit={this.addComment}>
          <textarea value={comment} onChange={this.handleChange} />
          <input type="submit" className="actionBtn"/>
        </form>
        <ul>
          {comments.slice(0, 1).map((item, index) => { return <li key={index}>{item}</li>; })}
        </ul>
      </div>
    );
  }
}

export default FotoComments;
