import { getPostMetaSearch } from '$lib/server/controllers/posts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const posts = await getPostMetaSearch();
	return json(posts);
};
