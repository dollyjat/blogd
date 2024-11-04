// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

export interface SearchMeta {
	item: Item;
	refIndex: number;
}

export interface Item {
	title: string;
	slug: string;
	tags: string[];
}
