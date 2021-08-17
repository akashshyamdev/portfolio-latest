import React, { useState } from 'react';

interface ISlide {
	user: string;
	name: string;
	content: string;
	rating: number;
	half: boolean;
}

interface Props {
	slides: ISlide[];
}

export default function Slider({ slides }: Props) {
	const [current, setCurrent] = useState(0);

	const changeSlide = (i: number, prev: number) => {
		setCurrent(i);
	};

	return (
		<>
			<ul className='bg-gray-50 rounded-2xl'>
				{slides.map((slide, i: number) => (
					<li
						style={{ display: current === i ? 'flex' : 'none' }}
						className='px-10 py-10 flex flex-col items-center justify-center'
						id={`slide__${i}`}
					>
						<div className='flex flex-row w-full items-center mb-7 justify-center'>
							<img src={require(`../assets/images/${slide.user}`).default} alt='User 1' className='rounded-full w-10 h-10' />

							<h5 className='text-xl ml-5'>{slide.name}</h5>
						</div>

						<p className='text-lg text-center w-full'>{slide.content}</p>

						<div className='mt-7'>
							{!slide.half &&
								Array.from(Array(slide.rating).keys()).map(() => (
									<i className='fas fa-star bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
								))}

							{!slide.half &&
								Array.from(Array(5 - slide.rating).keys()).map(() => (
									<i className='far fa-star text-2xl  bg-linear-gradient-2 text-transparent bg-clip-text' />
								))}

							{slide.half &&
								Array.from(Array(parseInt(slide.rating.toString().split('.')[0])).keys()).map(() => (
									<i className='fas fa-star bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
								))}

							{slide.half && (
								<i className='fas fa-star-half-alt bg-linear-gradient-2 text-transparent bg-clip-text text-2xl' />
							)}

							{slide.half &&
								Array.from(Array(4 - parseInt(slide.rating.toString().split('.')[0])).keys()).map(() => (
									<i className='far fa-star text-2xl  bg-linear-gradient-2 text-transparent bg-clip-text' />
								))}
						</div>
					</li>
				))}
			</ul>

			<div className='flex flex-row mt-10'>
				{slides.map((slide, i: number) => (
					<div
						className={`rounded-full w-6 mr-4 h-6 border-2 cursor-pointer ${
							current === i ? 'bg-purple-500' : 'border-purple-500'
						}`}
						onClick={() => changeSlide(i, current)}
					/>
				))}
			</div>
		</>
	);
}
