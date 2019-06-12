import React, { Component } from 'react';

const style = (block: boolean) => ({
	backgroundColor: '#00d182',
	padding: '10px 15px',
	border: '0px',
	borderRadius: '4px',
	color: '#fff',
	width: block ? '100%' : undefined,
	marginBottom: '10px'
});

interface IButton {
	block?: boolean;
}

export default class Button extends Component<IButton> {
	public render() {
		const { block = false } = this.props;
		return <button {...this.props} style={style(block)} />;
	}
}
