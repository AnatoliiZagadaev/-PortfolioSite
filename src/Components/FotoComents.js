import React from 'react';
import '../Components/Form.css';

class FotoComments extends React.Component{
  constructor(props) {
		super(props);
		this.state = {items: [], value: ''};
	}
	addComment(event) {
		this.state.items.push(this.state.value);
		this.setState({items: this.state.items});
		event.preventDefault();
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	render() {
		return (
			<div>	
				<form  onSubmit={this.addComment.bind(this)}>
					<textarea value={this.state.value}	onChange={this.handleChange.bind(this)}/>
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
