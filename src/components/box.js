import React from 'react';

export default props => {
	console.log('Box pros:', props);
	const boxStyle = {
		display: 'inline-block',
		height: '150px',
		width: '150px',
		backgroundColor: props.color,
		margin: '15px',
		transitionDuration: '500ms',
		borderRadius: '8%'
	};

	return <div style={boxStyle}/> // always self close tags
}