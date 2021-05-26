import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Prism from 'prismjs';
import { IArticleBase, IArticleDetailed } from '../../interfaces/articles';
import { Converter } from 'showdown';

export default function BlogDetail() {
	const [article, setArticle] = useState<IArticleBase | undefined>(undefined);

	const mdContainerRef = useRef<null | HTMLDivElement>(null);

	const { slug } = useParams<{ slug: string }>();

	useEffect(() => {
		(async () => {
			const { data }: AxiosResponse<IArticleDetailed> = await axios.get(`https://dev.to/api/articles/akashshyam/${slug}`);

			if (mdContainerRef.current) {
				const parser = new Converter();
				const html = parser.makeHtml(data.body_markdown);

				Prism.highlightAll();

				mdContainerRef.current.innerHTML = html
					.replaceAll('<h3', '<h3 class="text-4xl font-medium mt-7 mb-2"')
					.replaceAll('<h5', '<h5 class="text-2xl mt-5"')
					.replaceAll('<li', '<li class="list-disc"')
					.replaceAll(
						'<pre><code class="js language-js"',
						'<pre style="margin: 40px 0px" class="javascript language-javascript"><code class="javascript language-javascript"'
					)
					.replaceAll(
						'<pre><code class="css language-css"',
						'<pre style="margin: 40px 0px" class="css language-css"><code class="css language-css"'
					)
					.replaceAll(
						'<pre><code class="scss language-scss"',
						'<pre style="margin: 40px 0px" class="scss language-scss"><code class="scss language-scss"'
					);
			}

			setArticle(data);
		})();
	}, [slug, mdContainerRef]);

	return (
		<main className='mx-60 mt-12 text-gray-600'>
			<h1 className='text-8xl mb-16'>{article?.title}</h1>

			<div ref={mdContainerRef} className='text-lg'></div>
		</main>
	);
}
