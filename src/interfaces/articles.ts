import { IUser } from './users';

export type dataType =
	| 'article'
	| 'comment'
	| 'user_follower'
	| 'listing'
	| 'organization'
	| 'podcast_episodes'
	| 'video_article'
	| 'webhook_endpoint'
	| 'profile_image';

export interface IArticleBase {
	cannonical_url: string;
	collection_id: number | null;
	comments_count: number;
	cover_image: string;
	created_at: string;
	crossposted_at: null | any;
	description: string;
	edited_at: null | string;
	id: number;
	last_comment_at: string;
	path: string;
	positive_reactions_count: number;
	public_reactions_count: number;
	published_at: string;
	published_timestamp: string;
	readable_publish_date: string;
	reading_time_minutes: number;
	slug: string;
	social_image: string;
	tag_list: string[];
	tags: string;
	title: string;
	type_of: dataType;
	url: string;
	user: IUser;
}

export interface IArticleDetailed extends IArticleBase {
	body_html: string;
	body_markdown: string;
}
