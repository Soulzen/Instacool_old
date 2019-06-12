import React, { Component } from 'react';

import Post from '../../components/Post';
import Conteiner from '../../components/Container';

const style = {
	margin: '0 auto'
};

export class NewsFeed extends Component {
	public render() {
		return (
			<Conteiner>
				<div style={style}>
					<Post image="http://placekitten.com/300/200" />
				</div>
				<div style={style}>
					<Post image="http://placekitten.com/300/200" />
				</div>
			</Conteiner>
		);
	}
}

export default NewsFeed;
