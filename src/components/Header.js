import React from 'react';
// import Link from './Link';
import LinkComponent from './Link';

export default function Header() {
	const [showAbout, setShowAbout] = React.useState(false);
	return (
		<header className='flex justify-between w-full bg-olive-200 py-6 border border-b-jet-500 px-5'>
			<div className='grid grid-cols-7 gap-4'>
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
							<div
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
								style={{ borderTopLeftRadius: '.375rem', borderTopRightRadius: '.375rem' }}
							>
								<LinkComponent
									path='/about'
									text='About'
								/>
							</div>
							<div
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
								style={{ borderBottomLeftRadius: '.375rem', borderBottomRightRadius: '.375rem' }}
							>
								<LinkComponent
									path='/professional'
									text='Professional'
								/>
							</div>
							<div
								className='hover:bg-olive-600 px-3 py-2 flex items-center hover:text-olive-500 cursor-pointer'
								style={{ borderBottomLeftRadius: '.375rem', borderBottomRightRadius: '.375rem' }}
							>
								<LinkComponent
									path='/foreword'
									text='Foreword'
								/>
							</div>
						</div>
					) : null}
					<span className='hover:text-olive-500 cursor-pointer'>About</span>
				</div>
				<LinkComponent
					path='/buy'
					text='Buy Books'
				/>
				<LinkComponent
					path='/articles'
					text='Articles'
				/>
				<LinkComponent
					path='/news'
					text='News'
				/>
				<LinkComponent
					path='/blog'
					text='Blog'
				/>
				<LinkComponent
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
