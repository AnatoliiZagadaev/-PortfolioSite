import React from 'react';
import '../Components/Form.css';

class FotoComments extends React.Component{
  constructor(props) {
		super(props);
		this.state = {comments: [], comment: ''};
	}
	addComment = (event) => {
		const comments= [...this.state.comments]
		comments.push(this.state.comment)
		this.setState({comments })
		event.preventDefault();
	}
	addComment = (item) => {
      const comment= [...this.state.comment]
      comment.push(item)
      this.setState({
         comment
     })
	handleChange=(event)=>{
		this.setState({comment: event.target.value});
	}

	render(){
		return (
			<div>	
			<form  onSubmit={this.addComment}>
				<textarea value={this.state.comment}	onChange={this.handleChange}/>
				<input type="submit" className='actionBtn'/>
			</form>
		   <ul>
			 {this.state.comments.slice(0,1).map((item, index) => {return <li key={index}>{item}</li>})}
			</ul>
		</div>
		);
}
}

export default FotoComments;
