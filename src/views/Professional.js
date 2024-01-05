import React from 'react';
import award from '../assets/david-reward-accpetance.jpg';

export default function Professional() {
	return (
		<div>
			<div className='flex mt-5'>
				<div className='w-1/2'>
					<div className='w-5/6 mx-auto'>
						<h1 className='text-5xl text-center mb-4'>Education & Career</h1>
						<div className='mb-3'>David received his B.S. and M.S. degrees in physics from Brigham Young University, Provo, Utah, and from the University of Colorado, respectively.</div>
						<div className='mb-3'>
							David helped develop the atomic-clock timekeeping system for the US and for the world, while working for the National Bureau of Standards (later renamed the National Institute of
							Standards and Technology — NIST) with the responsibility to generate official time for the United States. “This People” magazine said, “Timex has nothing up on David W Allan, who’s
							perhaps the world’s more sophisticated time-keeper. But now, his timely scientific methods have led him to what may prove one of the more exciting discoveries in recent times – a new
							planet.”
						</div>
					</div>
					<div className='w-5/6 mx-auto'>
						<h1 className='text-5xl text-center mb-4'>Publications</h1>
						<div>
							David W. Allan has published well over a
							<a
								className='text-blue-600'
								href='http://www.allanstime.com/Publications/DWA/'
								target='_blank'
							>
								{' '}
								hundred peer-reviewed papers
							</a>
							, has contributed chapters in several books, has organized and lectured at several — internationally attended — tutorials and seminars on time and frequency, has chaired and attended
							several international timing committees — including being the U.S. representative from NBS/NIST for more than two decades on the international Consultative Committee for the Definition
							of the Second. The CCDS determined official time for the world under the umbrella of the International Bureau of Weights and Measures. The International Bureau of Weights and Measues
							(BIPM) generates official time for the world, UTC (Universal Time Coordianted).
						</div>
						<div>
							After retirement from the Boulder labs, he helped Hewlett Packard develop a method for synchronizing cell towers around the world. The also asked him to write a definitive article on the
							<a
								className='text-blue-600'
								href='http://itsabouttimebook.com/the-science-of-keeping-time/'
								target='_blank'
							>
								{' '}
								"Science of Timekeeping"{' '}
							</a>
							for the lay audience.
						</div>
					</div>
					<div className='w-5/6 mx-auto'>
						<h1 className='text-5xl text-center mb-4'>Inventions</h1>
						<ul className='mb-3'>
							<li>The writing of the algorithm for keeping official atomic-clock time for the United States of America — assisting several other nations as well</li>
							<li>
								A technique for characterizing the performance of precision clocks – named after him, the Allan variance (This technique came out of his master’s thesis and is the most cited
								publication to come out of the department and has been adopted as an international standard. GPS clocks were judged by this standard.)
							</li>
							<li>A time-difference measurement system that allows the time difference between two clocks to be measured to better than a million-millionth of a second – now used internationally</li>
							<li>Using GPS, his group developed an international time-transfer system with a precision of a few billionths of a second –- now used in generating international atomic time</li>
							<li>
								A time variance to assist the international telecom community to better synchronize their networks. He received the “Time Lord” award in Edinburgh, Scotland in 2011 for this
								contribution
							</li>
							<li>A “Smart Clock” patent that provides a way for a clock to always read the correct time</li>
							<li>After retirement from the Boulder labs, he helped Hewlett Packard develop a method for synchronizing cell towers around the world</li>
						</ul>
						<p className='italic'>
							He claims no genius for his inventions, but <span className='font-bold'>gives credit to God for the inspiration received</span> in helping make the world a better place.
						</p>
					</div>
				</div>
				<div className='w-1/2'>
					<div className='w-5/6 mx-auto'>
						<h1 className='text-5xl text-center mx-auto mb-4'>What Is the Atomic Clock</h1>
						<div className='mb-3'>
							Atomic clocks are the most accurate time pieces in the world. Over the years, the US atomic clock team has developed the most accurate clocks with astounding precisions and accuracies of
							much better than a billionth of a second in a day.
						</div>
						<div className='mb-3'>
							The benefits of high precision timing are way beyond most anyone’s comprehension. GPS would not work; telecommunications would not work, which includes telephones and cell phones.
							Computers would not work, which includes i-phones, i-pads and essentially all digital electronic devices.
						</div>
						<div className='mb-3'>
							Distribution of electric power depends upon it. Airplane and ship navigation depend upon it. Even the check-out stand laser scanner at your grocery store uses precision timing. All
							modern cars would not run without the precision timing devices that are now built into them. The stock market and banking transactions use precision timing at the millionth of a second
							level and are looking for better synchronization techniques.
						</div>
						<div className='mb-3'>
							New robotic cars which are now operative, are critically dependent on precision space and time measurements, and they have a perfect accident report. And the benefits list goes on, which
							includes all the high tech, satellites, and space exploration fields in astronomy and otherwise. These kinds of clocks are backbone to the internet.
						</div>
						<div className='mb-3'>
							The above uses are for the civilian sector of our population. Precision timing is totally integrated into our military and security systems. If you did away with precision timing, you
							would be back in the dark ages. It is, technologically, the backbone of our high tech society.
						</div>
						<div className='mb-3'>
							After retirement from the Boulder labs, he helped Hewlett Packard develop a method for synchronizing cell towers around the world. The also asked him to write a definitive article on the{' '}
							"Science of Timekeeping" for the lay audience.
						</div>
					</div>
					<div className='w-5/6 mx-auto'>
						<h1 className='text-5xl text-center mx-auto mb-4'>Awards</h1>
						<img
							className='float-right h-[300px] rounded-md'
							src={award}
							alt='david receiving award in Russia'
						/>
						<p className=''>
							The honor, pictured on the right, was a surprise to David. He was invited in September 2014 to give a plenary talk at an International Symposium on Time and Space held in Suzdal, Russia.
							Here they are presenting him with a plaque “To the founder of the modern time and frequency measurement statistic from Russian thankful users.” 50 YEARS ALLAN DEVIATION statistic with
							signatures of over 40 of their top scientists. He received numerous other awards – including the Department of Commerce Silver Medal and the I. I. Rabi Award. Nobel Laureate, Isidor
							Isaac Rabi was the first person to think of an atomic clock in the 1940s. The award was named after him, and he was the first recipient, David was the second.
						</p>
					</div>
				</div>
			</div>
			<div className='w-1/2 mx-auto'>
				<h5 className='text-3xl text-center mx-auto mb-4'>IEEE Award</h5>
				<p className='mb-3'>
					The IEEE (Institute of Electrical and Electronics Engineers) is the biggest scientific publishing house in the world, and the special issue celebrating the 50th year of the Allan variance
					came out 4 April 2016. This issue can be found
					<a
						className='text-blue-600'
						href='https://en.wikipedia.org/wiki/I._I._Rabi_Award#:~:text=%22The%20Rabi%20Award%20is%20to%20recognize%20outstanding%20contributions,Isidor%20Isaac%20Rabi%2C%20Nobel%20Prize%20winner%20in%201944.'
						target='_blank'
					>
						{' '}
						here
					</a>
				</p>
				<p>
					All by itself, I felt greatly honored by the nomination letter submitted by the who’s who in international time and frequency to the IEEE, let alone be chosen to receive their highest award
					in recognition of my work. On May 10th, 2016, my wife, Edna, and I had an amazing experience in Nor’lens (New Orleans) where I received IEEE’s highest recognition for my work. This annual
					symposium was the 70th providing for the international community the best in atomic-clock and precision timing research results.
				</p>
			</div>
		</div>
	);
}
