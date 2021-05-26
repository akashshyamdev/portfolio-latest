import React from 'react';
import { Route } from 'react-router-dom';
import BlogDetail from './containers/Blog/BlogDetail';
import BlogList from './containers/Blog/BlogList';
import Landing from './containers/Home';
import Resume from './containers/Resume/Resume';

function App() {
	return (
		<>
			{/* Home */}
			<Route path='/' component={Landing} />

			{/* Blogs */}
			<Route path='/blogs' component={BlogList} />
			<Route path='/blog/:slug' component={BlogDetail} />

			{/* Resume */}
			<Route path='/resume' component={Resume} />
		</>
	);
}

export default App;
