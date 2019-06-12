import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons';

const style = {
	backgroundColor: '#fff',
	padding: '10px 15px',
	border: '1px solid #eee'
};

const footerStyle = {
	backgroundColor: '#eee',
	marginLeft: '-15px',
	marginBottom: '-10px',
	width: 'calc(100% + 30px)',
	display: 'flex'
} as React.CSSProperties;

interface IPostProps {
	image: string;
}
export class Post extends Component<IPostProps> {
	public render() {
		const { image } = this.props;
		return (
			<div style={style}>
				<img src={image} />
				<div style={footerStyle}>
					<div style={{ flex: 1, textAlign: 'center', padding: '10px 15px', cursor: 'pointer' }}>
						<FontAwesomeIcon icon={faThumbsUp} /> Like
					</div>
					<div style={{ flex: 1, textAlign: 'center', padding: '10px 15px', cursor: 'pointer' }}>
						<FontAwesomeIcon icon={faRetweet} /> Compartir
					</div>
				</div>
			</div>
		);
	}
}

export default Post;
