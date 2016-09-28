import React, { Component } from 'react';


// class base component, extends means that my SearchBar will have
// all of the functionality React.Component has.

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term) {
		this.setState = ({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
					<input 
						// value={this.state.term}
						onChange={(event) => this.onInputChange(event.target.value)} />
			</div>	
		);
	}
}






export default SearchBar;