import React, { Component } from 'react';
import AllBooks from './AllBooks';
import MyList from './MyList';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="approot">
				<div className="container">
					<div className="open-list">
						<i className="fas fa-bars"></i>
					</div>
					<AllBooks />
				</div>
				<MyList />
			</div>
		);
	}
}

export default App;
