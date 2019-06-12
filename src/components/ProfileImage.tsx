import React, { Component } from 'react';

const style = {
	img: {
		borderRadius: '100%'
	}
};

export class ProfileImage extends Component {
	render() {
		return (
			<div>
				<img style={style.img} src="http://placekitten.com/100/100" alt="" />
			</div>
		);
	}
}

export default ProfileImage;
