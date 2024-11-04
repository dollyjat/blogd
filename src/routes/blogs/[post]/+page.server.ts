import { getPostBySlug, getPostMdById } from '$lib/server/controllers/posts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	console.log('🚀  load  params :- ', params);
	const postData = await getPostBySlug(params.post);
	const postMdData = await getPostMdById(postData[0].id.toString());
	return {
		postMd: postMdData[0].content
	};
}) satisfies PageServerLoad;
