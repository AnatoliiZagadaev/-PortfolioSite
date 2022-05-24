import React from 'react'

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
		const Comment = this.state.items.slice(0,1).map((item, index) => {
			return <li key={index}>{item}</li>;
		});
		return (
			<div>	
				<form onSubmit={this.addComment.bind(this)}>
					<textarea value={this.state.value}	onChange={this.handleChange.bind(this)}/>
					<input type="submit" />
				</form>
               <ul>
				 {Comment}
				</ul>
			</div>
		);
	}
}
  
export default FotoComments;
