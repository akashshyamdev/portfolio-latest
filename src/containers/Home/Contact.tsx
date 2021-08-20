import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import gsap from 'gsap';

export default function Contact() {
	const el = useRef<HTMLDivElement | null>(null);

	// GSAP
	const q = gsap.utils.selector(el);
	// const timeline = useRef<gsap.core.Timeline>();

	useEffect(() => {
		gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

		gsap.to('#animation-subject', {
			duration: 5,
			// @ts-ignore
			motionPath: {
				path: '#animation-path',
				alignOrigin: 'self',
			},
			scrollTrigger: {
				pin: true,
				start: 'bottom bottom',
				trigger: '#animation-start',
				scrub: 1,
			},
		});
	}, [q]);

	return (
		<section id='animation-start' className='text-gray-500 font-sans h-screen flex flex-row overflow-hidden' ref={el}>
			{/* Content */}
			<div className='w-1/2 py-20 p-20'>
				<h2 className='bg-linear-gradient-2 text-transparent bg-clip-text text-6xl'>Contact Me</h2>
				<hr className='bg-linear-gradient-2 h-2 border-none w-32 rounded-full mt-10' />

				<form className='pb-8 mt-16 w-2/3'>
					<div className='mb-6'>
						<label className='block text-gray-700 text-md font-bold mb-2' htmlFor='name'>
							Name
						</label>

						<input
							id='name'
							type='text'
							placeholder='John Doe'
							autoComplete='name'
							className='shadow appearance-none bg-blue-50 rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700 border focus:shadow-2xl'
						/>
					</div>

					<div className='mb-6'>
						<label className='block text-gray-700 text-md font-bold mb-2' htmlFor='email'>
							Email
						</label>

						<input
							id='email'
							type='text'
							autoComplete='email'
							placeholder='john@gmail.com'
							className='shadow appearance-none bg-blue-50 rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700 border focus:shadow-2xl'
						/>
					</div>

					<div className='mb-6'>
						<label className='block text-gray-700 text-md font-bold mb-2' htmlFor='email'>
							Message
						</label>

						<textarea
							id='email'
							placeholder="Hey Akash! I'm John and would like to collaborate on a project with you!"
							className='shadow appearance-none bg-blue-50 rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700 border focus:shadow-2xl'
						/>
					</div>

					<div className='flex items-center justify-between'>
						<button
							type='button'
							className='bg-linear-gradient-2 px-20 py-4 rounded-md text-3xl mr-16 button transition-all ease-out duration-300 hover:text-white  mt-10'
						>
							Sign In
						</button>
					</div>
				</form>
			</div>

			<div className='bg-red-500 w-1/2 relative'>
				{/* SVG */}
				<svg
					fill='none'
					width='315'
					height='451'
					viewBox='0 0 315 451'
					id='animation-subject'
					xmlns='http://www.w3.org/2000/svg'
					className='absolute bottom-32 right-48'
				>
					<path
						d='M254.123 370.686C253.362 330.854 241.579 322.404 235.783 323.502V337.218C243.119 335.161 252.764 363.965 254.123 370.686Z'
						fill='#FF0000'
						stroke='black'
						stroke-width='2'
					/>
					<path
						d='M236.191 336.38V332.784C242.017 332.784 250.395 347.693 253.308 364.98C244.846 341.884 240.352 337.763 236.191 336.38Z'
						fill='#D20000'
					/>
					<path
						d='M221.183 438.025C219.529 413.499 202.72 391.454 207.68 360.865L225.317 357.145C236.753 369.546 235.403 391.8 236.753 404.681C238.544 421.767 242.402 424.109 248.741 436.51C248.465 437.75 236.753 424.247 232.069 410.606C233.997 431.963 233.584 433.616 238.269 450.564C232.344 440.368 221.183 402.063 221.183 402.063C222.424 416.669 221.872 427.554 221.183 438.025Z'
						fill='#E73900'
					/>
					<path
						d='M218.427 411.433C216.774 394.623 205.062 379.742 210.022 361.141L225.592 357.696C232.757 365.963 230.414 398.481 237.579 414.74C233.721 407.437 230.552 401.925 227.659 392.969C225.52 397.654 230.01 420.894 232.674 432.101L218.427 385.942V411.433Z'
						fill='#E78C00'
					/>
					<path
						d='M212.502 360.589L214.431 360.176L224.076 358.109C229.312 365.825 226.419 381.809 230.828 392.556C226.694 387.32 223.663 376.021 223.663 376.021C223.663 376.021 224.076 398.618 226.005 403.854C223.663 399.721 218.289 377.95 218.289 377.95C216.36 388.422 216.911 389.8 216.911 395.587C215.947 386.769 206.302 372.026 212.502 360.589Z'
						fill='#E7E100'
					/>
					<path
						d='M226.143 376.021C223.938 371.337 226.005 362.932 223.112 358.247C223.112 358.247 220.586 358.752 219.529 359.074L220.356 364.723C220.31 364.31 220.576 363.18 220.907 363.07C221.321 362.932 223.663 373.955 226.143 376.021Z'
						fill='#FEFED5'
					/>
					<path
						d='M234.153 344.196L194.622 352.754L200.82 362.127L232.363 355.471L234.153 344.196Z'
						fill='#B3B3B3'
						stroke='black'
					/>
					<path
						d='M176.904 276.542L218.322 267.17C236.899 291.426 237.036 336.493 232.495 355.512L200.984 362.127C183.509 338.974 171.124 299.833 176.904 276.542Z'
						fill='#C4C4C4'
						stroke='black'
						stroke-width='2'
					/>
					<path d='M227.904 355.607L227.225 346.272L233.338 345.011L231.708 354.878L227.904 355.607Z' fill='#CCCCCC' />
					<path
						d='M188.071 386.58C170.943 347.59 178.327 335.371 184.64 334.822L190.953 346.766C181.758 347.864 185.601 372.302 188.071 386.58Z'
						fill='#FF0000'
						stroke='black'
						stroke-width='2'
					/>
					<path
						d='M202 359C188.136 339.221 180.904 304.8 185.16 290C187.356 305.381 196.279 335.783 205.064 345.327C208.907 334.4 214.673 335.23 214.673 335.23L217.418 350.168C217.418 350.168 213.575 352.658 214.673 355.839L202 359Z'
						fill='#CCCCCC'
					/>
					<path
						d='M219.889 380.874L208.478 329.127L212.01 328.301L223.15 379.911L219.889 380.874Z'
						fill='#FF0000'
						stroke='black'
					/>
					<path
						d='M181.581 341.139C175.81 353.683 183.318 370.436 186.257 379.652C172.363 347.466 178.776 336.462 184.387 335.637C184.387 335.637 186.391 339.626 189.731 346.228C188.128 346.641 186.658 348.842 186.658 348.842L181.581 341.139Z'
						fill='#D20000'
					/>
					<path
						d='M225.433 299C221.262 297.599 213.902 280.641 210 271.914C212.652 268.872 217.316 270.254 218.048 270.715C219.059 271.352 228.359 294.944 225.433 299Z'
						fill='white'
					/>
					<path
						d='M214.906 300.385C214.906 306.532 210.012 311.5 203.995 311.5C197.977 311.5 193.083 306.532 193.083 300.385C193.083 294.238 197.977 289.27 203.995 289.27C210.012 289.27 214.906 294.238 214.906 300.385Z'
						stroke='black'
					/>
					<path
						d='M214.906 300.385C214.906 306.532 210.012 311.5 203.995 311.5C197.977 311.5 193.083 306.532 193.083 300.385C193.083 294.238 197.977 289.27 203.995 289.27C210.012 289.27 214.906 294.238 214.906 300.385Z'
						stroke='black'
					/>
					<circle cx='203.995' cy='300.589' r='8.05839' fill='#80E5FF' stroke='black' />
					<path
						d='M207.698 307.109L196.659 299.422C197.078 296.264 199.593 294.617 200.572 294.068L211.331 302.579C210.912 305.187 208.676 306.835 207.698 307.109Z'
						fill='white'
					/>
					<path
						d='M16.5842 118.058C-5.91401 132.26 23.7296 160.783 23.7296 160.783L36.3616 207.487L57.6587 200.217L43.1403 156.479C43.1403 156.479 39.0824 103.855 16.5842 118.058Z'
						fill='#E77E44'
					/>
					<path
						d='M297.336 319.468C320.012 305.551 290.732 276.656 290.732 276.656L278.692 229.796L257.304 236.796L271.268 280.713C271.268 280.713 274.66 333.385 297.336 319.468Z'
						fill='#E77E44'
					/>
					<path
						d='M103.535 49.8187C105.232 59.2872 111.867 69.2933 114.972 73.1127C136.503 71.7143 179.874 67.32 181.109 60.9297C182.652 52.9419 185.346 47.6352 179.203 31.1913C173.06 14.7474 160.192 14.7874 156.478 13.8567C152.764 12.926 153.551 4.25646 140.115 6.69241C126.68 9.12835 104.049 26.0422 101.224 34.9052C98.3989 43.7682 102.224 47.3768 103.535 49.8187Z'
						fill='#9F452B'
					/>
					<path
						d='M174.273 112.741C174.116 111.941 172.466 107.074 171.661 104.74C160.484 104.932 138.181 106.842 138.386 112.949C138.642 120.583 137.452 117.702 139.232 123.582C141.012 129.462 148.351 134.041 163.949 129.933C179.548 125.825 174.47 113.741 174.273 112.741Z'
						fill='#D86B3F'
					/>
					<path
						d='M167.34 41.625C174.286 44.2042 195.967 101.618 155.682 115.36C137.901 118.859 128.818 105.486 120.748 91.9132C115.435 79.2315 113.723 64.925 115.383 56.2098C123.535 56.2671 142.507 42.427 150.974 35.4997C154.114 36.6817 161.784 39.5616 167.34 41.625Z'
						fill='#E77E44'
					/>
					<path
						d='M85.1221 153.913C87.7689 145.483 120.366 129.232 136.334 122.16C138.059 121.78 140.304 122.052 142.803 122.429L155.117 122.942C164.591 120.851 172.748 114.124 172.748 114.124C235.541 114.038 234.397 124.932 245.173 132.153C261.719 143.241 294.1 243.221 293.384 249.431C292.689 255.458 265.68 261.318 251.414 263.493C245.116 262.379 244.019 257.404 244.019 257.404C243.373 263.557 239.394 266.076 237.485 266.567C208.707 272.64 148.718 285.491 138.989 288.305C129.26 291.12 117.951 255.387 109.068 238.775C103.855 252.029 98.204 277.482 90.6057 289.385C65.1153 293.967 46.4985 268.235 43.478 263.059C41.1047 258.992 27.3519 211.736 27.9307 208.687C29.1273 206.545 27.4322 201.702 27.4322 201.702L60.4276 188.577C60.4276 188.577 61.218 192.159 64.4224 192.495C67.6267 192.831 67.6597 197.707 68.1746 196.258C68.8182 194.447 81.8136 164.451 85.1221 153.913Z'
						fill='#7E7CF1'
					/>
					<path
						d='M138.186 61.2761C123.408 58.9919 118.803 65.8516 117.58 69.4844C116.266 71.958 118.91 71.0917 119.654 70.5299C125.623 66.0327 133.052 67.8937 137.324 68.5068C140.139 68.9107 140.996 61.7105 138.186 61.2761Z'
						fill='#9C462F'
					/>
					<path
						d='M167.622 67.3216C160.088 63.6529 155.55 68.2432 154.223 70.9965C156.625 69.4854 159.906 68.217 160.506 68.0989C161.106 67.9809 169.141 68.0613 167.622 67.3216Z'
						fill='#9C462F'
					/>
					<path
						d='M137.709 73.6229C129.664 69.8893 125.427 73.8245 124.313 76.2588C125.276 75.2387 128.347 74.3891 131.115 73.8821C133.65 73.4177 139.623 74.9076 137.709 73.6229Z'
						fill='#9C462F'
					/>
					<path
						d='M163.865 54.562C156.064 54.6018 150.666 58.1975 148.942 59.9905C148.014 62.6652 151.115 67.8699 154.963 64.2054C161.757 57.7349 170.879 60.6582 171.401 60.1403C171.922 59.6224 168.222 54.5397 163.865 54.562Z'
						fill='#9C462F'
					/>
					<circle cx='161.617' cy='70.5801' r='2.8528' transform='rotate(-11.1318 161.617 70.5801)' fill='#303030' />
					<circle cx='161.617' cy='70.5801' r='2.8528' transform='rotate(-11.1318 161.617 70.5801)' fill='#303030' />
					<circle cx='131.226' cy='76.56' r='2.8528' transform='rotate(-11.1318 131.226 76.56)' fill='#303030' />
					<circle cx='131.226' cy='76.56' r='2.8528' transform='rotate(-11.1318 131.226 76.56)' fill='#303030' />
					<path
						d='M184.128 66.7736C183.283 60.7925 179.019 60.5102 176.992 61.1166L179.103 76.0694C181.13 75.4629 184.972 72.7547 184.128 66.7736Z'
						fill='#D66739'
					/>
					<path
						d='M109.59 81.6479C108.874 75.4754 113.732 73.495 115.85 73.3551L119.083 87.6719C116.217 88.2358 110.306 87.8204 109.59 81.6479Z'
						fill='#D66739'
					/>
					<path
						d='M152.719 104.521C146.833 105.846 141.196 100.489 139.113 97.6455C139.792 97.9273 146.363 98.2958 151.503 97.2844C156.901 96.2221 162.984 93.3637 162.984 93.3637C162.821 94.642 160.078 102.866 152.719 104.521Z'
						fill='white'
					/>
					<path
						d='M142.387 85.7862C144.4 81.2367 146.54 74.1698 145.799 68.2929C146.827 72.1059 150.022 80.4628 154.584 83.3862C158.888 87.316 154.365 89.6598 150.166 90.4859C145.568 91.3908 141.296 89.7392 142.387 85.7862Z'
						fill='#D2693A'
					/>
				</svg>

				{/* Path */}
				<svg
					width='209'
					height='491'
					viewBox='0 0 209 491'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='absolute right-0 bottom-0'
				>
					<path
						stroke='black'
						id='animation-path'
						className='opacity-0'
						d='M210.495 491C121.661 460.667 25.0001 459.4 35.0001 317C47.5001 139 155 231.61 155 125.5C155 29.5 97.5 3.5 1 0.5'
					/>
				</svg>
			</div>
		</section>
	);
}
