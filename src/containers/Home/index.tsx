import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Work from './Work';

export default function Landing() {
	return (
		<main>
			<Hero />
			<Skills />
			<Work />
			<Testimonials />
		</main>
	);
}
