import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogPreview from '../../components/BlogPreview';
import Dropdown from '../../components/Dropdown';
import { IArticleBase } from '../../interfaces/articles';

export default function BlogList() {
	const [articleList, setArticleList] = useState<IArticleBase[]>([]);
	const [filteredArticleList, setFilteredArticleList] = useState<IArticleBase[]>([]);
	const [tagList, setTagList] = useState<string[]>([]);
	const [articleFilter, setArticleFilter] = useState<null | string>(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		(async () => {
			const { data }: { data: IArticleBase[] } = await axios.get('https://dev.to/api/articles?username=akashshyam');
			console.log(data[0]);

			const tags: string[] = [];

			data.forEach((article) => {
				tags.push(...article.tag_list);
			});

			setTagList(Array.from(new Set(tags)));
			setFilteredArticleList(data);
			setArticleList(data);
		})();
	}, []);

	useEffect(() => {
		if (articleFilter) {
			setFilteredArticleList(articleList.filter((article) => article.tag_list.includes(articleFilter)));
		} else {
			setFilteredArticleList(articleList);
		}
	}, [articleFilter, articleList]);

	return (
		<main className='mx-60 text-gray-600'>
			<div className='flex flex-row justify-between mt-12 items-center'>
				<h1 className='text-8xl'>Blog List</h1>

				<Dropdown
					open={dropdownOpen}
					setOpen={setDropdownOpen}
					setArticleFilter={setArticleFilter}
					tags={tagList}
					selected={articleFilter}
				/>
			</div>

			<div className='flex flex-col justify-center mt-10'>
				{!articleList.length ? (
					<>
						<div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-3/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-2/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-10 animate-pulse w-1/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-4/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-4/5'>&nbsp;</div>
						</div>

						<div className='mt-10'>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-3/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-2/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-10 animate-pulse w-1/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-4/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-4/5'>&nbsp;</div>
						</div>

						<div className='mt-10'>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-3/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-4 animate-pulse w-2/5'>&nbsp;</div>
							<div className='bg-gray-300 rounded-full my-10 animate-pulse w-1/5'>&nbsp;</div>
						</div>
					</>
				) : (
					<>
						{filteredArticleList.map((article, i) => (
							<BlogPreview article={article} key={i} />
						))}
					</>
				)}
			</div>
		</main>
	);
}
