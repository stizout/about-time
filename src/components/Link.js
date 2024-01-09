import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkComponent({ path, text, className, style }) {
	return (
		<Link
			style={style}
			to={path}
			className={className}
		>
			{text}
		</Link>
	);
}
