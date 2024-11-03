import { writable } from 'svelte/store';
import type { SearchMeta } from '../../app';

const navOpen = writable(false);

const searchData = writable<SearchMeta[]>([]);

export { navOpen, searchData };
