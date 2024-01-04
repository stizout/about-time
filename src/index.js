import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './views/About';
import Articles from './views/Articles';
import Blog from './views/Blog';
import Contact from './views/Contact';
import News from './views/News';
import Header from './components/Header';
import Home from './views/Home';
import Foreward from './views/Foreward';
import Professional from './views/Professional';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: (
			<div className='flex flex-col h-screen w-full bg-jet-100 text-font-500'>
				<div className='h-full bg-white w-3/4 mx-auto'>
					<Header />
					Whoops!
				</div>
			</div>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/articles',
				element: <Articles />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/news',
				element: <News />,
			},
			{
				path: '/foreword',
				element: <Foreward />,
			},
			{
				path: '/professional',
				element: <Professional />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
