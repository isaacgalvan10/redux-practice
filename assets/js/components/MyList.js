import React, { Component } from 'react';

class MyList extends Component {
	state = {};
	render() {
		return (
			<section id="myList">
				<h3>My List of Books</h3>
				<ul>
					<li>
						X-MEN <span className="delete-btn">Delete</span>
					</li>
				</ul>
				<div className="close-list">Close List</div>
			</section>
		);
	}
}

export default MyList;
