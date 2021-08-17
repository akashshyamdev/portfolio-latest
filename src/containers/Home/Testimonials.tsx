import React from 'react';
import Slider from '../../components/Slider';

const slideData = [
	{
		user: 'user-1.jpeg',
		name: 'Test 1',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 4,
		half: false,
	},
	{
		user: 'user-1.jpeg',
		name: 'Test 2',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 4.5,
		half: true,
	},
	{
		user: 'user-1.jpeg',
		name: 'Test 3',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 3.5,
		half: true,
	},
	{
		user: 'user-1.jpeg',
		name: 'Test 3',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 2.5,
		half: true,
	},
];

export default function Testimonials() {
	return (
		<section className='text-gray-500 font-sans py-20 flex flex-col items-center overflow-x-hidden'>
			<h2 className='bg-linear-gradient-2 text-center text-transparent bg-clip-text text-6xl font-serif'>Testimonials</h2>
			<h5 className='text-center mt-4 text-3xl font-light font-serif'>Check out what other clients think about my work!</h5>

			<hr className='bg-linear-gradient-2 h-2 border-none w-32 rounded-full mt-8' />
			{/* 
			<article className='review__container mt-20'>
				<div className='review bg-gray-50 w-96  rounded-md px-10 py-7'>
					<div className='flex flex-row w-full items-center mb-7'>
						<img src={require('../../assets/images/user-1.jpeg').default} alt='User 1' className='rounded-full w-10 h-10' />
						<h5 className='text-xl ml-5'>Lousie Maryanne</h5>
					</div>

					<p className='text-lg w-full'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non
						possimus.
					</p>

					<div className='mt-7'>
						<i className='fas fa-star bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
						<i className='fas fa-star bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
						<i className='fas fa-star bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
						<i className='fas fa-star bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
						<i className='fas fa-star-half-alt bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
					</div>
				</div>
			</article> */}

			<div className='mt-20 flex flex-col items-center w-1/3'>
				<Slider slides={slideData} />
			</div>
		</section>
	);
}
