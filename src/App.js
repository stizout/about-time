import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='flex flex-col h-screen w-full bg-jet-100 text-font-500'>
			<div className='h-full bg-white w-3/4 mx-auto'>
				<Header />
				<div
					className='overflow-auto pb-9'
					style={{ height: 'calc(100% - 80px' }}
				>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default App;
