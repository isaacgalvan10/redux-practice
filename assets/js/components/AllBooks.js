import React, { Component } from 'react';

class AllBooks extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="all-books">
				<div className="book-container">
					<div className="book"></div>
				</div>
				<div className="book-container">
					<div className="book"></div>
				</div>
			</div>
		);
	}
}

export default AllBooks;
