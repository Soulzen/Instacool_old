import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Center from '../../components/Center';

export class Login extends Component {
	render() {
		return (
			<Container center={true}>
				<Card>
					<Title>Iniciar Sesión</Title>
					<Input placeholder="Correo" label="Correo" />
					<Input placeholder="Contraseña" label="Contraseña" />
					<Button block={true}>Enviar</Button>
					<Center>
						<Link to="/register">Ir la registro</Link>
					</Center>
				</Card>
			</Container>
		);
	}
}

export default Login;
