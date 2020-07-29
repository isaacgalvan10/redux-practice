import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeMyList, removeBook } from '../actions/allActions';

class MyList extends Component {
	showListOfBooks = () => {
		return this.props.globalState.myList.map(book => {
			return (
				<li key={book}>
					{book}{' '}
					<span
						className="delete-btn"
						onClick={this.props.removeBook.bind(null, book)}
					>
						Delete
					</span>
				</li>
			);
		});
	};

	render() {
		return (
			<section
				id="myList"
				className={this.props.globalState.listOpen === true ? 'active' : ''}
			>
				<h3>My List of Books</h3>
				<ul>{this.showListOfBooks()}</ul>
				<div className="close-list" onClick={this.props.closeMyList}>
					Close List
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(mapStateToProps, { closeMyList, removeBook })(MyList);
