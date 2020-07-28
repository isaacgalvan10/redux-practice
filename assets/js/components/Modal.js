import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeInfoBook } from '../actions/allActions';

class Modal extends Component {
	render() {
		const book = this.props.globalState.openInfoBook;
		return (
			<div
				id="modal"
				className={this.props.globalState.popupOpen === true ? 'active' : ''}
			>
				<div className="modal-container">
					<div className="close-modal" onClick={this.props.closeInfoBook}>
						<i className="fas fa-times"></i>
					</div>
					<div className="modal-grid">
						<div className="images">
							<div
								className="cover"
								style={{
									backgroundImage: `url('${book.coverURL}')`
								}}
							></div>
						</div>
						<div className="info">
							<h2>{book.title}</h2>
							<div className="info-line">
								<span className="bold">Author: </span>
								{book.author}
							</div>
							<div className="info-line">
								<span className="bold">Category: </span>
								{book.category}
							</div>
							<div className="info-line">
								<span className="bold">Published: </span>
								{book.published}
							</div>
							<p className="review">{book.review}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(mapStateToProps, {
	closeInfoBook
})(Modal);
