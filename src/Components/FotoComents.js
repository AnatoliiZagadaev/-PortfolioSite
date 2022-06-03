import React from 'react';
import '../Components/Form.css';

class FotoComments extends React.Component{
  constructor(props) {
		super(props);
		this.state = {items: [], comment: ''};
	}
	addComment=(event)=>{
		//const newitem=[...item,value]
		this.state.items.push(this.state.comment);
		this.setState({items: this.state.items});
		event.preventDefault();
	}
	addComment = (value) => {
      const comment= [...this.state.comment]
      comment.push(value)
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
			 {this.state.items.slice(0,1).map((item, index) => {return <li key={index}>{item}</li>})}
			</ul>
		</div>
		);
}
}

export default FotoComments;
