import React from 'react';

export default function Skills() {
	return (
		<section className='-mt-14 px-64 pb-20'>
			<div
				className='bg-white rounded-lg flex flex-row text-gray-500 font-normal font-sans'
				style={{ boxShadow: '2px 2px 60px rgba(0, 0, 0, 0.25)' }}
			>
				{/* Design */}
				<div className='border-r border-purple-100 w-2/6 flex flex-col items-center py-14 px-10'>
					<img src={require('../../assets/svg/design-icon.svg').default} alt='Design Icon' />

					<h4 className='text-purple-500 text-3xl mt-16'>UI/UX Designer</h4>

					<p className='text-center mt-8 text-lg'>
						I focus on modern, interactive, engaging and attractive designs. My designs never let the user get bored.
					</p>

					<h6 className='text-purple-500 text-xl mt-8'>My Design Tools:</h6>

					<div className='flex flex-row justify-between items-center mt-5 gap-5'>
						<div className='tooltip cursor-pointer'>
							<img
								src={require('../../assets/svg/adobe-xd-icon.svg').default}
								alt='Adobe XD Icon'
								className='h-11 w-11 tooltip__target'
							/>

							<span className='tooltip__text'>Adobe XD</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img
								src={require('../../assets/svg/figma-icon.svg').default}
								alt='Figma Icon'
								className='h-11 w-11 tooltip__target'
							/>

							<span className='tooltip__text'>Figma</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img
								src={require('../../assets/svg/photoshop-icon.svg').default}
								alt='Figma Icon'
								className='h-11 w-11 tooltip__target'
							/>

							<span className='tooltip__text'>Photoshop</span>
						</div>
					</div>
				</div>

				{/* Code */}
				<div className='border-r border-purple-100 w-2/6 flex flex-col items-center py-14 px-10'>
					<img src={require('../../assets/svg/code-icon.svg').default} alt='Design Icon' className='mb-2' />

					<h4 className='text-purple-500 text-3xl mt-16'>Fullstack Web Developer</h4>

					<p className='text-center mt-8 text-lg'>
						I love creating attractive and engaging websites in the browser with the MERN stack
					</p>

					<h6 className='text-purple-500 text-xl mt-8'>Languages I Know:</h6>

					<div className='flex flex-row justify-between items-center mt-5 gap-5'>
						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/html-icon.svg').default} alt='HTML 5 Icon' className='h-11' />

							<span className='tooltip__text'>HTML 5</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/css-icon.svg').default} alt='CSS 3 Icon' className='h-11' />
							<span className='tooltip__text'>CSS 3</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/js-icon.svg').default} alt='Javascript Icon' className='h-11' />

							<span className='tooltip__text'>Javascript</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/ts-icon.svg').default} alt='Typescript Icon' className='h-11' />

							<span className='tooltip__text'>Typescript</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/sass-icon.svg').default} alt='Sass/SCSS Icon' className='h-11' />

							<span className='tooltip__text'>Sass/SCSS</span>
						</div>
					</div>

					<h6 className='text-purple-500 text-xl mt-8'>Libraries / Frameworks I Use:</h6>

					<div className='flex flex-row justify-between items-center mt-5 gap-5'>
						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/bootstrap-icon.svg').default} alt='Bootstrap Icon' className='h-11' />

							<span className='tooltip__text'>Bootstrap</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/react-icon.svg').default} alt='React Icon' className='h-11' />

							<span className='tooltip__text'>React</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/redux-icon.svg').default} alt='Redux Icon' className='h-11' />

							<span className='tooltip__text'>Redux</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/gsap-icon.svg').default} alt='GSAP Icon' className='h-11' />

							<span className='tooltip__text'>GSAP</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/tailwind-icon.svg').default} alt='Tailwind CSS Icon' className='h-11' />

							<span className='tooltip__text'>Tailwind CSS</span>
						</div>

						<div className='tooltip cursor-pointer'>
							<img src={require('../../assets/svg/mongo-icon.svg').default} alt='Mongoose Icon' className='h-11' />

							<span className='tooltip__text'>Mongoose</span>
						</div>
					</div>
				</div>

				<div className='w-2/6 flex flex-col items-center py-14 px-10'>
					<img src={require('../../assets/svg/blog-icon.svg').default} alt='Design Icon' />

					<h4 className='text-purple-500 text-3xl mt-16'>Blogger</h4>

					<p className='text-center mt-8 text-lg'>
						I like to share my experience with others to help them become better developers. My blog has 8500+ views.
					</p>

					<h6 className='text-purple-500 text-xl mt-8'>Topics I Cover:</h6>

					<p className='text-center mt-4 text-lg'>HTML, CSS/Sass, Javascript and React, NodeJS, MongoDB, Three.JS</p>
				</div>
			</div>
		</section>
	);
}
