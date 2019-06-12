import React, { Component } from 'react';

import Post from '../../components/Post';
import Conteiner from '../../components/Container';

export class NewsFeed extends Component {
	public render() {
		return (
			<Conteiner>
				<div>
					<Post />
				</div>
			</Conteiner>
		);
	}
}

export default NewsFeed;
