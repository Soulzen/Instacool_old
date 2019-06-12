import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const style = {
	navbar: {
		borderBottom: 'solid 1px #aaa',
		padding: '10px 15px'
	},
	link: {
		color: '#555',
		textDecoration: 'none'
	}
};

export class Navbar extends Component {
	public render() {
		return (
			<div style={style.navbar}>
				<Link style={style.link} to="/app/newsfeed">
					<FontAwesomeIcon icon={faNewspaper} /> Instacool
				</Link>
				<div style={{ float: 'right' }}>
					<Link style={style.link} to="/app/profile">
						<FontAwesomeIcon icon={faUser} />Perfil
					</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
