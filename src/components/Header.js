import React, { Component } from 'react';

import SearchFilters from './SearchFilters';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	toggleVisibility = () => {
		const visible = !this.state.visible;
		this.setState({
			visible,
		});
	}

	render() {
		return (
			<nav className={`my_navbar ${this.state.visible ? 'active' : ''}`}>
				<div className="my_title">houseXplore</div>
				<div className="my_btn my_toggle-btn" onClick={this.toggleVisibility}>Toggle Filters</div>
				<SearchFilters {...this.props} visible={this.state.visible} />
			</nav>
		);
	}
}

export default Header;