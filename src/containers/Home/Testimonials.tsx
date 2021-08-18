import React from 'react';
import Slider from '../../components/Slider';

const slideData = [
	{
		user: 'user-1.jpeg',
		name: 'Test 1',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 4,
		half: false,
	},
	{
		user: 'user-1.jpeg',
		name: 'Test 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 4.5,
		half: true,
	},
	{
		user: 'user-1.jpeg',
		name: 'Test 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 3.5,
		half: true,
	},
	{
		user: 'user-1.jpeg',
		name: 'Test 4',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat totam eius tempora a cupiditate non possimus',
		rating: 2.5,
		half: true,
	},
];

export default function Testimonials() {
	return (
		<section className='text-gray-500 font-sans py-20 flex flex-col items-center overflow-x-hidden'>
			<h2 className='bg-linear-gradient-2 text-center text-transparent bg-clip-text text-6xl font-serif'>Testimonials</h2>
			<h5 className='text-center mt-4 text-3xl font-light font-serif'>Check out what other clients think about my work!</h5>

			<div className='mt-20 flex flex-col items-center w-1/3'>
				<Slider slides={slideData} />
			</div>
		</section>
	);
}
