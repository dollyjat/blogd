import { db } from '$lib/server/db';
import { post, postData } from '$lib/server/db/schema';
import data from '../data/posts.json';
import { v4 as uuid } from 'uuid';
import { readFileSync } from 'fs';

interface Post {
	title: string;
	slug: string;
	date: string;
	tags: string[];
	description: string;
}

export async function addPosts() {
	const posts = data as Post[];

	const newPosts = posts.map(({ date, ...post }) => {
		console.log('🚀  newPosts  date :- ', date);
		return {
			id: uuid(),
			...post
		};
	});
	await db.insert(post).values(newPosts);
}

export async function addPostsData() {
	const text = readFileSync(
		'./src/lib/devCode/context-api-usecontext.md',
		'utf-8'
	);
	await db.insert(postData).values({
		postId: '5de58b9f-65ed-46fe-8aca-84fb1f8b1e2b',
		content: text
	});
}
