import { readFileSync } from 'fs';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const text = readFileSync(
		'./src/lib/devCode/context-api-usecontext.md',
		'utf-8'
	);
	return {
		postMd: text
	};
}) satisfies PageServerLoad;
