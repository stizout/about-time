import React from 'react';
import davidBike from '../assets/david-edna-bike.jpg';
import davidEdna from '../assets/David-and-Edna-Allan.jpg';
import reunion from '../assets/david-allan-family-reunion.jpg';
import healthy from '../assets/healthy-about.jpg';
import davidMary from '../assets/david-allan-mary-owen.jpg';
import familyBike from '../assets/david-allan-family-bike-ride.jpg';
import AboutImage from '../components/AboutImage';

export default function About() {
	return (
		<div>
			<h1 className='text-5xl m-10'>About the Author</h1>
			<div className='w-5/6 mx-auto text-lg'>
				<div className='mb-3'>
					David W. Allan is one of the world’s premier time experts. He also has an unusual zeal for matters pertaining to spirituality, health, freedom, and all good things. He was born in Mapleton,
					Utah, September 25, 1936. David received his B.S. and M.S. degrees in physics from Brigham Young University, Provo, Utah, and from the University of Colorado, respectively. David’s loves are
					the Lord, his Sweetheart and precious family and friends, and he is ever on a quest for the truth. He keeps fit as he approaches his 80th birthday by riding his mountain bike, exercising,
					and walking with his wife, Edna.
				</div>
				<div className='mb-3'>
					David has always placed an emphasis on health. He says, "I am convinced my plant based diet has not only saved my life, but reversed twelve of the “Western diseases” that were afflicting my
					body. The benefits are profound, and I have found flavors and enjoy my food more than I ever did before – thanks to my Sweetheart wife, who is one outstanding ‘cuisiniere" He loves to go
					hiking and bike riding, and is always looking for more ways to be active.
				</div>
				<div className='mb-3'>
					Located in the cooler central Utah climate at 6,000 foot elevation, the Allan’s solar home integrates at least ten different forms of solar, including: trombe wall, solarium convection,
					photovoltaic cells, propylene-glycol heat exchange, eutectic salt chamber, berm insulation, black chimneys and under-ground intake for passive solar air conditioning, and dehydration of
					food. Their solar green house provides fresh veggies and herbs all winter long.
				</div>
				<div className='mb-3'>
					In the LDS Church he has served as a bishop, stake president. He served in the Denver Mission presidency and completed two missions (one as a young man and in 1997-99 with his wife, Edna, in
					French speaking Cote d’Ivoire, West Africa). Most recently, he taught institute for eleven years for the Moroni Stake. David’s devotion to learning and the pursuit of truth has revealed a
					surprisingly strong connection between things spiritual, scientific, physical, political, historical and mental. He feels “It’s About Time” we became aware of the ideas that bind us to the
					eternal. This is the most exciting time in the history of the planet, and he has written this book to help you understand that – especially as you gain a better understanding of what the
					future holds. Is there a better person on the planet to write about time, man’s time, where we are in God’s time with science harmonizing with religion, and bringing health to body, mind,
					and spirit?
				</div>
			</div>
			<div className='flex flex-wrap justify-center'>
				<AboutImage
					imageSrc={davidBike}
					key={'image-1'}
					text='David with his wife at their home in Fountain Green'
				/>
				<AboutImage
					imageSrc={davidEdna}
					key={'image-2'}
					text='David with his wife on their way to a Christmas concert'
				/>
				<AboutImage
					imageSrc={reunion}
					key={'image-3'}
					text='Family reunion at Lake Tahoe'
				/>
				<AboutImage
					imageSrc={healthy}
					key={'image-4'}
					text='David enjoying his plant based diet'
				/>
				<AboutImage
					imageSrc={familyBike}
					key={'image-5'}
					text='David with his two sons enjoying a bike ride'
				/>
				<AboutImage
					imageSrc={davidMary}
					key={'image-5'}
					text='David taking his grand-daughter for a hike'
				/>
			</div>
		</div>
	);
}
