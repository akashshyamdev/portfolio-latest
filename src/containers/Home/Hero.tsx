import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/18123-developer.json';

export default function Hero() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<section className='bg-radial-gradient-1 text-white px-28 py-20 h-screen flex flex-row justify-between pr-44'>
			<div>
				<h5 className='text-2xl mb-5'>I SPECIALIZE IN</h5>

				<h1 className='bg-linear-gradient-2 text-transparent bg-clip-text text-6xl w7w-7/12 mb-14 font-heading'>
					Immersive, Accessible and Performative Websites
				</h1>

				<h4 className='text-2xl w-7/12 font-light font-sans'>
					Hi, I’m Akash! A fullstack web developer and designer who is passionate about coding. I love creating websites
					for startups and companies to increase their exposure. Checkout my{' '}
					<a
						href='https://github.com/akashshyamdev'
						target='_blank'
						rel='noreferrer'
						className='animation-underline p-2'
					>
						github
					</a>{' '}
					and{' '}
					<a
						href='https://dev.to/akashshyam'
						target='_blank'
						rel='noreferrer'
						className='animation-underline py-2 px-3'
					>
						blog
					</a>
				</h4>

				<div className='mt-20'>
					<button className='bg-linear-gradient-2 px-20 py-4 rounded-md text-3xl mr-16 button transition-all ease-out duration-300 hover:text-white'>
						Work
					</button>

					<button
						className='px-20 py-4 rounded-md text-3xl button  transition-all ease-out duration-300 hover:text-white'
						style={{ border: '2px solid #f8a94c' }}
					>
						Resume
					</button>
				</div>
			</div>

			<Lottie options={defaultOptions} height={600} width={1300} />
		</section>
	);
}
