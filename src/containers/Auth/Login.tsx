import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/Card';
import Container from '../../components/Container';
import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';

import { ILogin, login as loginThunk } from '../../ducks/Users';
import { ThunkDispatch } from 'redux-thunk';

interface ILoginProps {
	login: (a: ILogin) => void;
}
export class Login extends Component<ILoginProps> {
	render() {
		const { login } = this.props;
		console.log({ login });
		return (
			<Container center={true}>
				<Card>
					<Title>Iniciar Sesión</Title>
					<LoginForm onSubmit={login} />
				</Card>
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
	login: (payload: any) => dispatch(loginThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
