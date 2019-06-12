import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/Card';
import Container from '../../components/Container';
import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';

import { login } from '../../ducks/Users';

export class Login extends Component {
	render() {
		return (
			<Container center={true}>
				<Card>
					<Title>Iniciar Sesión</Title>
					<LoginForm />
				</Card>
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: any) => ({
	login: (payload: any) => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
