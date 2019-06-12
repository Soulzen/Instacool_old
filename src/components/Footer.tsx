import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons';

const styles = {
	footer: {
		backgroundColor: '#eee',
		marginLeft: '-15px',
		marginBottom: '-10px',
		width: 'calc(100% + 30px)',
		display: 'flex'
	},
	button: {
		flex: 1,
		textAlign: 'center',
		padding: '10px 15px',
		cursor: 'pointer',
		border: 'solid 1px #ccc'
	}
};

export default class Footer extends Component {
	public render() {
		return (
			<div style={styles.footer}>
				<div style={styles.button as React.CSSProperties}>
					<FontAwesomeIcon icon={faThumbsUp} /> Like
				</div>
				<div style={styles.button as React.CSSProperties}>
					<FontAwesomeIcon icon={faRetweet} /> Compartir
				</div>
			</div>
		);
	}
}
