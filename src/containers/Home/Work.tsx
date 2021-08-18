import React from 'react';
import { Link } from 'react-router-dom';

export default function Work() {
	return (
		<section className='bg-linear-gradient-1 text-white font-sans flex flex-col items-center py-20 pb-32'>
			<h2 className='bg-linear-gradient-2 text-center text-transparent bg-clip-text text-6xl'>Work</h2>
			<h5 className='text-center mt-5 text-3xl font-light'>Here are a few projects I've worked on recently.</h5>

			<hr className='bg-linear-gradient-2 h-2 border-none w-32 rounded-full mt-10' />

			<div className='grid grid-cols-3 mt-24 px-32 gap-x-24 gap-y-24 work__container'>
				<div className='work h-72' style={{ width: '500px' }}>
					<div className='work__overlay w-full h-full rounded-xl'></div>

					<img
						src={require('../../assets/images/orgamine-home.webp').default}
						alt='Orgamine Home'
						className='w-full h-full rounded-xl work__image'
					/>

					<div className='work__content flex-col items-center'>
						<h4 className='text-3xl mt-7 text-center mb-4'>Orgamine</h4>

						<p className='text-center mx-4 text-lg mb-5'>
							This was for Orgamine, a chemical factory based in Mumbai, Maharastra. I gave the outdated website a
							fresh, modern and attractive look.
						</p>

						<Link
							to={`/work/orgamine`}
							className='bg-linear-gradient-2 py-3 px-7 rounded-md text-xl mt-7 justify-self-end'
						>
							Check it out !
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
