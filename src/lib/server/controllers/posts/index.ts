import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { asc, gt, arrayContains } from 'drizzle-orm';

export const getAllPosts = async () => {
	return await db.select().from(post);
};

export const getPostMetaSearch = async () => {
	return await db
		.select({
			title: post.title,
			slug: post.slug,
			tags: post.tags
		})
		.from(post);
};

export const getPostBySlug = async (slug: string) => {
	return await db.select().from(post).where(eq(post.slug, slug));
};

export const getPostsByTag = async (tag: string) => {
	return await db
		.select()
		.from(post)
		.where(arrayContains(post.tags, [tag]));
};

export const nextPostPage = async (cursor: string, pageSize = 5) => {
	return await db
		.select()
		.from(post)
		.where(gt(post.id, cursor))
		.limit(pageSize)
		.orderBy(asc(post.id));
};
