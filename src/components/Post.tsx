import React, { Component } from 'react';

const style = {
	backgroundColor: '#fff',
	padding: '10px 15px',
	border: '1px solid #eee'
};

export class Post extends Component {
	public render() {
		const { children } = this.props;
		return <div style={style}>{children}</div>;
	}
}

export default Post;
