import React, { Component } from 'react';

const style = {
	backgroundColor: '#fff',
	padding: '10px 15px',
	border: '1px solid #eee',
	borderRadius: '4px',
	width: 'calc(100% - 30px)',
	marginBottom: '10px'
};

const spanStyle = {
	fontSize: '12px',
	color: '#777',
	textTransform: 'uppercase',
	fontWeight: 900
} as React.CSSProperties;

interface IInputProps {
	placeholder?: string;
	label: string;
}
export default class Input extends Component<IInputProps> {
	public render() {
		const { label } = this.props;
		return (
			<div>
				<span style={spanStyle}>{label}</span>
				<input {...this.props} style={style} />
			</div>
		);
	}
}
