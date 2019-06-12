import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import Input from './Input';
import Button from './Button';
import Center from './Center';

export class LoginForm extends Component<InjectedFormProps> {
	public render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<Field label="Correo" placeholder="Correo" name="email" type="email" component={Input} />
				<Field
					label="Contraseña"
					placeholder="Contraseña"
					name="password"
					type="password"
					component={Input}
				/>
				<Button block={true}>Enviar</Button>
				<Center>
					<Link to="/register">Ir la registro</Link>
				</Center>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login'
})(LoginForm);
