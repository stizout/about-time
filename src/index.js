import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './views/About';
import Blog from './views/Blog';
import Contact from './views/Contact';
import News from './views/News';
import Header from './components/Header';
import Home from './views/Home';
import Foreward from './views/Foreward';
import Professional from './views/Professional';
import Commentary from './views/articles/Commentary';
import Free from './views/articles/Free';
import AllanVariance from './views/articles/free/AllanVariance';
import SevenStepsAtonement from './views/articles/free/SevenStepsAtonement';
import GathersChickens from './views/articles/free/GathersChickens';
import OneWithGod from './views/articles/free/OneWithGod';
import TimeTableLord from './views/articles/free/TimeTableLord';
import BypassCameToPass from './views/articles/free/BypassCameToPass';
import ComeToPassJehovah from './views/articles/free/ComeToPassJehovah';
import ShallSure from './views/articles/free/ShallSure';
import ThirdWitness from './views/articles/free/ThirdWitness';
import OldAsAdam from './views/articles/free/OldAsAdam';
import BOMGeography from './views/articles/free/BOMGeography';
import LeftToTell from './views/articles/free/LeftToTell';
import ArtOfListening from './views/articles/free/ArtOfListening';
import SuperFood from './views/articles/free/SuperFood';
import SimpleSecrets from './views/articles/free/SimpleSecrets';
import PandemicProtection from './views/articles/free/PandemicProtection';
import NatrualNoiseProcesses from './views/articles/free/NaturalNoiseProcesses';
import CarloVigano from './views/articles/commentary/CarloVigano';
import GreatestScientist from './views/articles/commentary/GreatestScientist';
import BOMWhoWhat from './views/articles/commentary/BOMWhoWhat';
import WakeUpAmerica from './views/articles/commentary/WakeUpAmerica';
import OrganicEvolution from './views/articles/commentary/OrganicEvolution';
import SharingGospel from './views/articles/commentary/SharingGospel';
import Asea from './views/articles/commentary/Asea';
import WhoIsIsrael from './views/articles/commentary/WhoIsIsrael';
import BOMTookPlace from './views/articles/commentary/BOMTookPlace';
import Glyphosate from './views/articles/commentary/Glyphosate';
import GPSDevlopment from './views/articles/commentary/GPSDevlopment';
import IdealSocieties from './views/articles/commentary/IdealSocieties';
import GraceOrWorks from './views/articles/commentary/GraceOrWorks';
import AllanVarianceAnniversary from './views/articles/commentary/AllanVarianceAnniversary';
import BeHealthy from './views/articles/commentary/BeHealthy';

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
				path: '/articles/commentary',
				element: <Commentary />,
			},
			{
				path: '/articles/free',
				element: <Free />,
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
			{
				path: '/article/allan-variance',
				element: <AllanVariance />,
			},
			{
				path: '/article/seven-steps-atonement',
				element: <SevenStepsAtonement />,
			},
			{
				path: '/article/gather-her-chickens',
				element: <GathersChickens />,
			},
			{
				path: '/article/one-with-god',
				element: <OneWithGod />,
			},
			{
				path: '/article/time-table-lord',
				element: <TimeTableLord />,
			},
			{
				path: '/article/dont-bypass-it-came-to-pass',
				element: <BypassCameToPass />,
			},
			{
				path: '/article/harmony-to-all-scripture',
				element: <ComeToPassJehovah />,
			},
			{
				path: '/article/shall-is-sure',
				element: <ShallSure />,
			},
			{
				path: '/article/third-witness',
				element: <ThirdWitness />,
			},
			{
				path: '/article/as-old-as-adam',
				element: <OldAsAdam />,
			},
			{
				path: '/article/book-of-mormon-geography',
				element: <BOMGeography />,
			},
			{
				path: '/article/left-to-tell',
				element: <LeftToTell />,
			},
			{
				path: '/article/art-of-listening',
				element: <ArtOfListening />,
			},
			{
				path: '/article/super-food',
				element: <SuperFood />,
			},
			{
				path: '/article/simple-secrets',
				element: <SimpleSecrets />,
			},
			{
				path: '/article/pandemic-protection',
				element: <PandemicProtection />,
			},
			{
				path: '/article/natural-noises-processes',
				element: <NatrualNoiseProcesses />,
			},
			{
				path: '/articles/extra/carlo-vigano',
				element: <CarloVigano />,
			},
			{
				path: '/articles/extra/god-greatest-scientist',
				element: <GreatestScientist />,
			},
			{
				path: '/articles/extra/book-of-mormon-who-what',
				element: <BOMWhoWhat />,
			},
			{
				path: '/articles/extra/wake-up-america',
				element: <WakeUpAmerica />,
			},
			{
				path: '/articles/extra/organic-evolution',
				element: <OrganicEvolution />,
			},
			{
				path: '/articles/extra/sharing-the-gospel',
				element: <SharingGospel />,
			},
			{
				path: '/articles/extra/experience-with-asea',
				element: <Asea />,
			},
			{
				path: '/articles/extra/who-is-israel',
				element: <WhoIsIsrael />,
			},
			{
				path: '/articles/extra/book-of-mormon-take-place',
				element: <BOMTookPlace />,
			},
			{
				path: '/articles/extra/glyphosate',
				element: <Glyphosate />,
			},
			{
				path: '/articles/extra/gps-development',
				element: <GPSDevlopment />,
			},
			{
				path: '/articles/extra/ideal-societies',
				element: <IdealSocieties />,
			},
			{
				path: '/articles/extra/grace-or-works',
				element: <GraceOrWorks />,
			},
			{
				path: '/articles/extra/allan-variance',
				element: <AllanVarianceAnniversary />,
			},
			{
				path: '/articles/extra/be-healthy',
				element: <BeHealthy />,
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
