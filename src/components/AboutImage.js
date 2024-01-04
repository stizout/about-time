import React, { useRef, useEffect, useState } from 'react';

export default function AboutImage({ imageSrc, text, key }) {
	const [dim, setDim] = useState({ width: '0px', height: '0px' });
	const thing = useRef();

	useEffect(() => {
		if (thing.current) {
			setDim({ width: thing.current.clientWidth, height: thing.current.clientHeight });
		}
	}, []);
	return (
		<div className='relative  mr-3 mb-3'>
			<div
				className='hover:bg-slate-500 absolute rounded-md opacity-0 text-white hover:opacity-70 transition-all flex items-center justify-center px-2'
				style={{ zIndex: 1, width: dim?.width, height: dim?.height }}
			>
				{text}
			</div>
			<img
				ref={thing}
				id={key}
				className='rounded-md  max-w-[400px] max-h-[300px]'
				src={imageSrc}
				alt={text}
			/>
		</div>
	);
}
