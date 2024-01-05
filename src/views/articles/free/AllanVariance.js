import React from 'react';
import equation from '../../../assets/Allan-Variance-Equation-.png';

export default function AllanVariance() {
	return (
		<div className='w-3/5 mx-auto'>
			<h1 className='text-4xl my-5'>Allan Variance in Layman’s Terms</h1>
			<div className='w-5/6 mx-auto'>
				<p className='mb-3'>
					We can think of the Allan variance as a measure of <span className='font-bold'>change</span>. Some say the only constant thing is <span className='font-bold'>change</span>! My good friend,
					Emeritus Professor of Philosophy from BYU, Chauncey Riddle says, “Time seems to be the possibility of <span className='font-bold'>change</span>.” From a philosophical and religious
					perspective, the most important <span className='font-bold'>change</span> in our mortal journey is to <span className='font-bold'>change</span> our behavior to be true disciples of Christ,
					who opened the door and the possibility for us to receive eternal life through his mercy, grace and{' '}
					<a
						className='text-blue-600'
						href='http://itsabouttimebook.com/the-infinite-atonement-of-jesus-christ/'
						target='_blank'
					>
						infinite atonement.
					</a>
				</p>
				<p className='mb-3'>
					Time as we use it is an artifact of scientific endeavor and is actually <span className='font-bold'>time-interval</span>. With the Lord’s help and that of colleagues, in 1968 I wrote the
					algorithm, AT-1, for generating time for the USA from the readings from an ensemble of atomic clocks and it is still ticking today. By <span className='font-bold'>time-interval</span> we
					mean the accumulated time of a clock from some origin. For example, your wristwatch reads the time accumulated since noon or midnight. Your Gregorian calendar tells you the number of years,
					months, and days since the reported <span className='font-bold'>time-interval</span> since the birth of Christ, A.D. (Anno Domini).
				</p>
				<p className='mb-3'>
					Timekeeping accuracy has improved a billion-fold in my lifetime. AMAZING, and it has been exciting to be part of this phenomenal growth. The AT-1 algorithm updates and optimizes each clock’s
					weight in the ensemble at each measurement cycle. The AT-1 output is always better than the best clock in the ensemble. The AT-1 algorithm responds automatically as new and improved atomic
					clocks are added. Ironically, even the worst clock optimally enhances the output. The Allan variance is used to characterize each of the clocks and to make sure they are used optimally. AT-1
					is then used as an optimum time stable reference to generate official time for the USA, UTC(NIST). UTC(NIST) is steered to be in agreement with official world time, UTC, (Universal Time
					Coordinated).
				</p>
				<p className='mb-3'>
					Time as we think of it flowing through the heavens as we observe sunrise, sunset, the phase of the moon, the planets, and the stars is a concept in our minds. It is metaphysical; we cannot
					measure it. It cannot be extracted from natural phenomena. But we can measure <span className='font-bold'>how things change</span> – coming back to Professor Riddle’s definition.
				</p>
				<p className='mb-3'>
					It can be shown, for example, that the Allan variance is the optimum estimator of the <span className='font-bold'>change in rate</span> of an ideal atomic clock in a variance sense. We can
					think of it as how much a clock’s rate changes from one interval of time to the next. In universities around the world in statistics classes, they teach how to compute the classical
					variance, which, in simple terms, can be thought of as taking the average value of a set of data, and then computing how much each value in the data set varies from that mean value. The
					classical variance then is just the average of the squares of the deviations of each value from the mean. So from a data set, you end up with a mean value and the classical variance of data
					values around that mean.
				</p>
				<p className='mb-3'>
					What I was able to show in my 1965 thesis was that the classical variance is not a useful measure in many instances. It is like taking a black-and-white picture of a rainbow with all its
					beautiful colors. You only get intensity and miss the spectacular array of colors. The advantage of the Allan variance is that it gives you both intensity and color.
				</p>
				<p className='mb-3'>
					For example, there are some commonly encountered kinds of noise like flicker noise and random walk noise, where one can show mathematically that neither the mean value nor the classical
					variance have convergent values. Whereas the Allan variance converges quickly to a useful value and tells you the color of noise as well.
				</p>
				<p className='mb-3'>
					For those of you who have had some math, if you will excuse a few Greek letters and mathematical symbols, I can give you a simple mathematical explanation of the Allan variance equation: Let
					us suppose we have a data set of values, which we will denote as y. For example, we can think of y being the rate of a clock. It is a law of physics that the rate of a clock varies from one
					interval to the next. The Allan variance was developed to measure those changes precisely and optimally. See{' '}
					<a
						className='text-blue-600'
						href='https://tf.nist.gov/general/pdf/7.pdf'
						target='_blank'
					>
						Statistics of Atomic Frequency Standards
					</a>
				</p>
				<img
					className='mx-auto w-[200px]'
					src={equation}
					alt='allan variance equation'
				/>
				<p className='mb-3'>
					Let’s suppose each value of y in this data set is an average over an interval denoted by the Greek letter tau. Further, let i denote the number for the ith measurement of y, then we write
					the difference between adjacent measurements of y as denoted by the Greek letter delta, Δy = yi+1 – yi. This difference is the change in the clock’s rate between the ith data value and the
					next one, the i+1 value. We square this difference and then average these squares over the whole data set as denoted by the brackets. We divide this average by 2, which then makes the Allan
					variance equal to the classical variance if the ys are taken from a random and uncorrelated data set; i.e. white noise, like the flip of a coin. Each flip has no memory of any of the past
					flips.
				</p>
				<p className='mb-3'>
					<p className='mb-3'>
						As an example of y, suppose your wristwatch gained one second per day, then y = 1 second / 86400 seconds = 1.157e-5, and τ is equal to 1 day. Notice that y is dimensionless. Now in
						contrast to the classical variance, we can compute another Allan variance for 2 τ and for all values of τ available from the data set. As we observe how the Allan variance varies with τ,
						we can tell the different colors of noise as well as their amplitude.
					</p>
					In the literature, the Allan variance, which was given birth in my master’s thesis at the University of Colorado in 1965, is denoted AVAR. The thesis was published in a special issue of the
					Proceedings of the IEEE in February 1966. It is one of the most cited publications to come out of the Department of Commerce. What is typically plotted is the square-root of AVAR – denoted
					ADEV, and when this is plotted on a log-log scale the slope as a function of τ indicates the color of noise as well as the level.
				</p>
				<p className='mb-3'>
					In addition, the prediction error of a clock over an interval τp may be estimated by calculating τp times ADEV(τp). This is particularly useful, for example, for a system like GPS, where the
					atomic clocks in the satellites need to predict time forward for some hours until they cross another tracking and upload station. To get the accuracy needed for GPS this needs to be done at
					the nanosecond (ns) level of precision, where a nanosecond is a billionth of a second – the time it takes light to travel 30 cm (about 1 foot). Precisely synchronized atomic clocks give GPS
					its accuracy.
				</p>
				<p className='mb-3'>
					I thank the Lord for His inspiration along with excellent colleagues in developing AVAR and the other variances that followed that I may be of service. The change that I seek in my personal
					goals is to hearken to and follow the WORDS of Jesus Christ. By His WORDS, I mean those written in scripture and those coming by inspiration–a blessing we can all enjoy. This change of
					behavior brings the greatest joy, and I desire to share that with others. I have learned that when we are serving others, we are serving Him. My life has been greatly blessed in so doing.
				</p>
			</div>
		</div>
	);
}
