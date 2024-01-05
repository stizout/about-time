import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ title, body, link, color }) {
	return (
		<Link
			className={`rounded-md inline-block py-3 px-4 max-w-[400px] ${color} shadow-lg shadow-jet-500/50 hover:bg-font-300`}
			to={link}
		>
			<h6 className='text-lg'>{title}</h6>
			<p style={{ whiteSpace: 'pre-line' }}>{body}</p>
		</Link>
	);
}
