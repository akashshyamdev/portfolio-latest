import React from 'react';
import { Link } from 'react-router-dom';
import { IArticleBase } from '../interfaces/articles';
import { formatDateAgo } from '../services/date';

interface Props {
	article: IArticleBase;
}

export default function BlogPreview({ article }: Props) {
	console.log(article);

	return (
		<div className='w-full  my-5 p-10  shadow-2xl rounded-lg bg-gray-50'>
			<h3 className='font-sans text-5xl'>{article?.title}</h3>

			<p className='mt-2'>{article?.description}</p>

			<div className='flex flex-row gap-x-4 text-gray-400 mt-4'>
				{article.tag_list.map((tag, i: number) => (
					<p key={i}>#{tag}</p>
				))}
			</div>

			<div className='flex flex-row justify-between  items-center mt-5'>
				<div className='flex flex-row'>
					<p>
						<i className='fas fa-calendar-alt mr-2 text-indigo-800'></i> {formatDateAgo(new Date(article.published_timestamp))}
					</p>

					<p className='ml-7'>
						<i className='fas fa-comments mr-2 text-blue-400'></i> {article?.comments_count}
					</p>

					<p className='ml-7'>
						<i className='fas fa-eye mr-2 text-green-600'></i> {article?.reading_time_minutes}{' '}
						{article.reading_time_minutes === 1 ? 'min' : 'mins'}
					</p>

					<p className='ml-7'>
						<i className='fas fa-heart mr-2 text-red-600'></i> {article?.public_reactions_count}
					</p>
				</div>

				<Link to={`/blog/${article.slug}`} className='btn'>
					Check it out
				</Link>
			</div>
		</div>
	);
}
