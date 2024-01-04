import React from 'react';
import chauncy from '../assets/riddle-with-allan.jpg';

export default function Foreward() {
	return (
		<div>
			<h1 className='text-5xl m-10'>Forword</h1>
			<div className='w-3/4 mx-auto'>
				<h3 className='text-xl'>Foreword by Emeritus Professor, Chauncey C. Riddle</h3>
				<div className='italic text-lg'>
					Chauncey Cazier Riddle graduated from Brigham Young University and received his MA and PhD degrees in philosophy from Columbia University in the city of New York. He taught at BYU for 40
					years, serving as Professor of Philosophy, Chairman of the Department of Graduate Studies in Religious Instruction, Dean of the Graduate School, and Assistant Academic Vice President. It has
					been said that three of the greatest teachers to grace the halls of Brigham Young University in this generation were Hugh Nibley, Arthur Henry King, and Chauncey Riddle. See
					http://ChaunceyRiddle.com
				</div>

				<div className='flex mt-8'>
					<div className=' w-1/2'>
						<h6>Dear Reader</h6>
						<p className='mb-2'>
							You are in for a special treat. David W. Allan has two special qualifications to write this book: He is a world-renowned scientist and he is a thoroughly grounded Christian.
						</p>
						<p className='mb-2'>
							In this work he initiates a rapprochement It’s About Time Book Forward – Science and Religion of science and religion. The science he discusses is centered on the study and measurement
							of time, the area in which he spent his entire professional life. His scientific prowess resulted in great improvements in the measurement of time and the many devices by which time is
							measured and compared. Unbeknownst to the average layman, the measurement of time is crucial to much technology in our modern world, such as GPS.
						</p>
						<p className='mb-2'>
							David Allan correctly recognizes that science is a work in progress. He recognizes that some scientists currently entertain some questionable hypotheses, but that science itself is a
							very worthwhile enterprise. It is worthwhile especially because it can help humanity solve the technical problems which abound in our complex human world. He also values religion and
							sees it as the practical application of good sense to the solution of everyday personal problems. He believes that when one has found true wisdom (true religion), personal happiness is
							the assured result. He posits an approach to religion that is practical for mind, body and spirit, seeing mental health, spiritual health and body health as a single package.
						</p>
						<p className='mb-2'>
							His science is sound. Please do not be put off by formulas and Greek letter notation. As you read and reread the technical passages you will find them to be keys to understanding
							science. They enable precision in thinking and acting, which valuables are at the core of all technical excellence in applying scientific thought to our human practical problems.
						</p>
						<p className='mb-2'>
							And please take advantage of the many references he makes to other works, especially those on his own website, which will add much to your understanding of the matters of time, science
							and religion.
						</p>
						<p className='mb-2'>
							As you immerse yourself in conversation with David Allan by reading his words, please take time to savor carefully what he says. Then challenge what he says. Challenge it by applying the
							religion to your own life and problems, and by applying the science in some technical way if you are thus skilled. Only in these twin applications will you come to full appreciation of
							what he says and to be able to improve on what he says. Improving on what he says is the thing he most desires from each of his readers.
						</p>
						<p className='mb-2'>Happy reading, careful thinking, and improved living to each of you through your adventure with this book.</p>
					</div>
					<div className='flex flex-col justify-center w-1/2'>
						<img
							className='ml-10'
							alt='chauncy with david allan'
							src={chauncy}
						/>
						<p className='italic text-center'>Chauncey Riddle holds David Allan’s book and David hold’s Chauncey’s book: Think Independently</p>
					</div>
				</div>
			</div>
		</div>
	);
}
