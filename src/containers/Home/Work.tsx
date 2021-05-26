import React from 'react';

export default function Work() {
	return (
		<section className='bg-linear-gradient-1 text-white font-body py-16 flex flex-col items-center'>
			<h2 className='bg-linear-gradient-2 text-center text-transparent bg-clip-text text-6xl'>Work</h2>
			<h5 className='text-center mt-5 text-3xl font-light'>Here are a few projects I've worked on recently.</h5>
			<hr className='bg-linear-gradient-2 h-2 border-none w-32 rounded-full mt-10' />

			<div className='grid col-4'></div>
		</section>
	);
}
