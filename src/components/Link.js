import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkComponent({ path, text }) {
	return (
		<Link
			to={path}
			className='hover:text-olive-500'
		>
			{text}
		</Link>
	);
}
