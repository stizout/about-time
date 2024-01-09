import React from 'react';
import LinkComponent from './Link';

export default function Header() {
	const [showAbout, setShowAbout] = React.useState(true);
	const [showArticles, setShowArticles] = React.useState(false);
	return (
		<header className='flex justify-between w-full bg-olive-200 py-6 border border-b-jet-500 px-5'>
			<div className='grid grid-cols-7 gap-7'>
				<LinkComponent
					path='/'
					text='Home'
				/>
				<div
					className='relative '
					onMouseEnter={() => setShowAbout(true)}
					onMouseLeave={() => setShowAbout(false)}
				>
					{showAbout ? (
						<div
							className='absolute border-2 rounded-md w-[150px] flex flex-col bg-white'
							style={{ top: '25px', zIndex: 100 }}
							onClick={() => setShowAbout(false)}
						>
							<LinkComponent
								style={{ borderTopLeftRadius: '.375rem', borderTopRightRadius: '.375rem' }}
								path='/about'
								text='About'
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
							/>
							<LinkComponent
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
								path='/professional'
								text='Professional'
							/>
							<LinkComponent
								style={{ borderBottomLeftRadius: '.375rem', borderBottomRightRadius: '.375rem' }}
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
								path='/foreword'
								text='Foreword'
							/>
						</div>
					) : null}
					<span className='hover:text-olive-500 cursor-pointer'>About</span>
				</div>
				<LinkComponent
					path='/buy'
					text='Books'
				/>
				<div
					className='relative '
					onMouseEnter={() => setShowArticles(true)}
					onMouseLeave={() => setShowArticles(false)}
				>
					{showArticles ? (
						<div
							className='absolute border-2 rounded-md w-[150px] flex flex-col bg-white'
							style={{ top: '25px', zIndex: 100 }}
							onClick={() => setShowArticles(false)}
						>
							<LinkComponent
								style={{ borderTopLeftRadius: '.375rem', borderTopRightRadius: '.375rem' }}
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
								path='/articles/commentary'
								text='Commentary Articles'
							/>
							<LinkComponent
								style={{ borderBottomLeftRadius: '.375rem', borderBottomRightRadius: '.375rem' }}
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
								path='/articles/free'
								text='Free Articles'
							/>
						</div>
					) : null}
					<span className='hover:text-olive-500 cursor-pointer'>Articles</span>
				</div>
				<LinkComponent
					className='hover:text-olive-500 cursor-pointer'
					path='/news'
					text='News'
				/>
				<LinkComponent
					className=' hover:text-olive-500 cursor-pointer'
					path='/blog'
					text='Blog'
				/>
				<LinkComponent
					className='hover:text-olive-500 cursor-pointer'
					path='/contact'
					text='Contact'
				/>
			</div>
			<div className='px-4'>
				<input className='rounded-md hover:bg-slate-50 outline-jet-500 pl-2' />
			</div>
		</header>
	);
}
