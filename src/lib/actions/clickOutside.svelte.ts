import type { Action } from 'svelte/action';

const clickOutside: Action<HTMLElement, (event: MouseEvent) => void> = (node, fn) => {
	const handleClick = (event: MouseEvent) => {
		if (node && event.target && !node.contains(event.target as Node) && !event.defaultPrevented) {
			fn(event!);
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};

export default clickOutside;
