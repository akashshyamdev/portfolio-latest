import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Resume() {
	const history = useHistory();

	return (
		<div className='flex'>
			<aside className='bg-purple-800 text-white pt-9 pb-9 min-h-screen' style={{ width: '300px' }}>
				<h1 className='text-6xl px-7'>Akash Shyam</h1>

				<h3 className='mt-5 font-serif text-3xl px-7'>Web Developer and UI/UX Designer</h3>

				<h5 className='mt-8 text-2xl font-bold tracking-wider bg-purple-900 px-7 py-3'>Skills</h5>

				<div className='container px-7 flex flex-col justify-center'>
					<p className='text-base tracking-wider mt-7'>Figma / Adobe XD for wire framing, prototyping etc</p>
					<p className='text-base tracking-wider mt-7'>Sass, Bootstrap, Tailwind, Bulma</p>
					<p className='text-base tracking-wider mt-7'>Javascript and Typescript and common NPM libraries</p>
					<p className='text-base tracking-wider mt-7'>React with hooks, Redux etc</p>
					<p className='text-base tracking-wider mt-7'>APIs with Node JS, Express and MongoDB</p>
					<p className='text-base tracking-wider mt-7'>E-commerce apps with Paypal and Stripe</p>
					<p className='text-base tracking-wider mt-7'>Git with Github, Gitlab & Bitbucket etc</p>
					<p className='text-base tracking-wider mt-7'>GCP, Firebase, Azure, AWS etc</p>
					<p className='text-base tracking-wider mt-7'>Hosting services like Heroku, Netlify </p>
				</div>
			</aside>

			<main className='pt-16 px-16 text-gray-600' style={{ width: '100%' }}>
				{/* Intro */}
				<p className='text-xl tracking-wider'>
					Talented UI/UX Designer and Fullstack developer with over 2-3 years of experience in building attractive and perfomative
					e-commerce websites and functional APIs. I have a{' '}
					<a href='https://dev.to/akashshyam' className='hover:border-gray-200'>
						blog
					</a>{' '}
					with over 7000 views
				</p>

				{/* Contact */}
				<div className='mt-10 grid grid-cols-2'>
					<p className='text-purple-800'>
						<i className='fas fa-map-marker-alt mr-4' />
						Mumbai, MH 400071
					</p>

					<p className='text-purple-800'>
						<i className='fab fa-linkedin-in mr-4' />
						<a href='https://www.linkedin.com/in/akash-shyam'>https://www.linkedin.com/in/akash-shyam</a>
					</p>

					<p className='text-purple-800 mt-5'>
						<i className='fas fa-phone-alt mr-4' />
						+91 8928141367
					</p>

					<p className='text-purple-800 mt-5'>
						<i className='fas fa-link mr-4' />
						https://akashshyamportfolio.netlify.app/
					</p>
				</div>

				{/* Experience */}
				<div className='mt-12'>
					<h3 className='text-purple-800 font-bold text-3xl font-serif'>
						<i className='fas fa-briefcase mr-4 bg-purple-800 text-white p-3 rounded-full' /> Experience
					</h3>

					<div className='mt-7 tracking-wider'>
						<h5 className='text-xl font-medium'>React Developer for a property management site</h5>
						<p className='italic'>Freelancing</p>

						<ul className='mt-4'>
							<li>Created a property management website using HTML, SASS, Javascript and React</li>
							<li>
								Leveraged various firebase products like firestore, firebase auth, firebase hosting, cloud functions,
								analytics etc to accelerate development
							</li>
							<li>Recommended and implemented UI design changes to improve user interaction</li>
							<li>Built a complex and interactive dashboard which uses data from firebase and other APIs</li>
						</ul>

						<button className='btn mt-7' onClick={() => history.push('/work/property-management')}>
							See More
						</button>
					</div>

					<div className='mt-5 tracking-wider'>
						<h5 className='text-xl font-medium'>Frontend Developer for an art e-commerce websites</h5>
						<p className='italic'>Freelancing</p>

						<ul className='mt-4'>
							<li>An art marketing website with art galleries, artists, events and more</li>
							<li>Used HTML, Sass, Javascript, jQuery PHP and mySQL</li>
							<li>Testing and debugging website</li>
						</ul>

						<button className='btn mt-7' onClick={() => history.push(`/work/art-ecommerce`)}>
							See More
						</button>
					</div>
				</div>

				<div className='mt-12'>
					<h3 className='text-purple-800 font-bold text-3xl font-serif'>
						<i className='fas fa-university mr-4 bg-purple-800 text-white p-3 rounded-full' /> Education
					</h3>

					<div className='mt-7'>
						<h5 className='tracking-wider text-xl font-medium'>Delhi Public School - Navi Mumbai</h5>
					</div>
				</div>

				<div className='mt-12'>
					<h3 className='text-purple-800 font-bold text-3xl font-serif'>
						<i className='fas fa-link mr-4 bg-purple-800 text-white p-3 rounded-full' /> References
					</h3>

					<div className='mt-7'>
						{/* Blog */}
						<h5>
							<a href='https://dev.to/akashshyam' className='tracking-wider text-xl font-medium'>
								My Blogging Platform
							</a>{' '}
							<span className='tracking-wider text-md text-gray-500'>- A blog with over 7,700 views</span>
						</h5>

						{/* Upword */}
						<h5>
							<a href='https://www.upwork.com/freelancers/~010555a8b9defd4641' className='tracking-wider text-xl font-medium'>
								Freelancing Profile
							</a>{' '}
							<span className='tracking-wider text-md text-gray-500'>- Check out my profile on upwork!</span>
						</h5>
					</div>
				</div>
			</main>
		</div>
	);
}
