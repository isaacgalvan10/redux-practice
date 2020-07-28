import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openInfoBook } from './../actions/allActions';

class AllBooks extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBooks = () => {
		return this.props.booksData.map(book => {
			return (
				<div className="book-container" key={book.id}>
					<div
						onClick={this.props.openInfoBook.bind(null, book)}
						className="book"
						style={{ backgroundImage: `url('${book.coverURL}')` }}
					></div>
				</div>
			);
		});
	};

	render() {
		return <div className="all-books">{this.showAllBooks()}</div>;
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(mapStateToProps, {
	openInfoBook
})(AllBooks);
