import React from 'react';

interface Props {
	open: boolean;
	setOpen: Function;
	setArticleFilter: Function;
	selected: string | null;
	tags: string[];
}

export default function Dropdown({ open, setOpen, tags, setArticleFilter, selected }: Props) {
	return (
		<div>
			<button className='dropdown__activator text-2xl btn' onClick={() => setOpen(!open)}>
				Filters
			</button>
			<div className='dropdown'>
				{open && (
					<ul className='absolute dropdown__list'>
						<li
							className={`dropdown__item ${selected === null && 'dropdown__item--selected'}`}
							onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => setArticleFilter(null)}
						>
							All
						</li>

						{tags.map((tag, i) => (
							<li
								className={`dropdown__item ${selected === tag && 'dropdown__item--selected'}`}
								key={i}
								// @ts-ignore
								onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => setArticleFilter(e.target.textContent)}
							>
								{tag}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
