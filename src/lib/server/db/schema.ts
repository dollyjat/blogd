import { pgTable, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	emailVerified: boolean('emailVerified').default(true),
	image: text('image'),
	createdAt: timestamp('createdAt').notNull(),
	updatedAt: timestamp('updatedAt').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	expiresAt: timestamp('expiresAt').notNull(),
	ipAddress: text('ipAddress'),
	userAgent: text('userAgent'),
	userId: text('userId')
		.notNull()
		.references(() => user.id)
});

export const account = pgTable('account', {
	id: text('id').primaryKey(),
	accountId: text('accountId').notNull(),
	providerId: text('providerId').notNull(),
	userId: text('userId')
		.notNull()
		.references(() => user.id),
	accessToken: text('accessToken'),
	refreshToken: text('refreshToken'),
	idToken: text('idToken'),
	expiresAt: timestamp('expiresAt'),
	password: text('password')
});

export const verification = pgTable('verification', {
	id: text('id').primaryKey(),
	identifier: text('identifier').notNull(),
	value: text('value').notNull(),
	expiresAt: timestamp('expiresAt').notNull()
});

export const post = pgTable('post', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: text('title').notNull(),
	slug: text('slug').notNull(),
	tags: text('tags').notNull().array(),
	description: text('description').notNull(),
	createdAt: timestamp('createdAt').defaultNow(),
	updatedAt: timestamp('updatedAt').defaultNow()
});

export const postData = pgTable('post_data', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	postId: text('postId')
		.notNull()
		.references(() => post.id),
	content: text('content').notNull()
});

export const tag = pgTable('tag', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: text('name').notNull(),
	slug: text('slug').notNull(),
	description: text('description').notNull()
});
