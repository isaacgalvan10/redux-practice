import React, { Component } from 'react';
import AllBooks from './AllBooks';
import MyList from './MyList';
import { connect } from 'react-redux';
import { openMyList } from './../actions/allActions';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div
				id="approot"
				className={this.props.globalState.popupOpen === true ? 'popupOpen' : ''}
			>
				<div className="container">
					<div className="open-list" onClick={this.props.openMyList}>
						<i className="fas fa-bars"></i>
					</div>
					<AllBooks />
				</div>
				<MyList />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(mapStateToProps, { openMyList })(App);
