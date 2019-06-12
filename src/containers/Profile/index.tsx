import React, { Component } from 'react';
import ProfileImage from '../../components/ProfileImage';
import Button from '../../components/Button';

const style = {
	container: {
		padding: '15px',
		display: 'flex',
		justifyContent: 'space-between'
	}
};

export class Profile extends Component {
	public render() {
		return (
			<div style={style.container}>
				<ProfileImage />
				<Button>Agregar</Button>
			</div>
		);
	}
}

export default Profile;
