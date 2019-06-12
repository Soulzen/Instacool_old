import React, { Component } from 'react';
import ProfileImage from '../../components/ProfileImage';
import Button from '../../components/Button';
import Card from '../../components/Card';

const style = {
	container: {
		padding: '15px'
	},
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '10px'
	}
};

export class Profile extends Component {
	public render() {
		return (
			<div style={style.container}>
				<div style={style.row}>
					<ProfileImage />
					<Button>Agregar</Button>
				</div>
				<div style={style.row}>
					<Card>
						<img src="http://placekitten.com/200/200" alt="" />
					</Card>
					<Card>
						<img src="http://placekitten.com/200/200" alt="" />
					</Card>
					<Card>
						<img src="http://placekitten.com/200/200" alt="" />
					</Card>
				</div>
				<div style={style.row}>
					<Card>
						<img src="http://placekitten.com/200/200" alt="" />
					</Card>
					<Card>
						<img src="http://placekitten.com/200/200" alt="" />
					</Card>
					<Card>
						<img src="http://placekitten.com/200/200" alt="" />
					</Card>
				</div>
			</div>
		);
	}
}

export default Profile;
