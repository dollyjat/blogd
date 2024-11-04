import { writable } from 'svelte/store';

const navOpen = writable(false);

const isSearchOpen = writable(false);

const searachValue = writable('');

export { isSearchOpen, navOpen, searachValue };
