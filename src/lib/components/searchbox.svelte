<script lang="ts">
	import { CloseCircleSolid } from 'flowbite-svelte-icons';
	import { isSearchOpen } from '$lib/store/layout.svelte';
	import clickOutside from '../actions/clickOutside.svelte';
	import Fuse from 'fuse.js';
	import { onMount } from 'svelte';
	import type { SearchMeta } from '../../app';

	let searchValue = $state('');

	let searchData = $state<SearchMeta[]>([]);

	let fetchData = $state([]);

	async function searchHere(value: string) {
		const fuse = new Fuse(fetchData, {
			keys: ['title'],
			threshold: 0.3
		});

		const result = fuse.search(value);

		if (result.length > 0) {
			searchData = result;
		} else {
			searchData = [];
		}
	}

	$effect(() => {
		if (searchValue.length > 0) {
			searchHere(searchValue);
		}
	});

	onMount(async () => {
		if (fetchData.length === 0) {
			const data = await fetch('/api/search').then((res) => res.json());
			fetchData = data;
			searchData = [];
		}
	});
</script>

<div class="absolute z-[2000] h-full w-full overflow-hidden bg-[#2b3a31f5]">
	<div class="flex h-full w-full items-center justify-center">
		<div
			use:clickOutside={() => {
				isSearchOpen.update((value) => !value);
			}}
			class="mx-auto flex w-full flex-col items-center gap-2 rounded-md border border-bg-box bg-bg-layout p-6 text-sm md:text-lg lg:w-2/4"
		>
			<button class="relative bottom-9" onclick={() => isSearchOpen.update((value) => !value)}>
				<CloseCircleSolid color="#2e9f5b" class="h-10 w-10" />
			</button>

			<div class="relative w-2/3 md:block">
				<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						color="currentColor"
						class="h-4 w-4 shrink-0"
						aria-label="search outline"
						viewBox="0 0 24 24"
						><path
							stroke="currentColor"
							stroke-linecap="round"
							d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
							stroke-width="2"
						></path></svg
					>
				</div>

				<input
					bind:value={searchValue}
					class="bg-bg-bg block w-full rounded-lg border border-bg-box p-2.5 ps-10 text-sm text-text-layout outline-none rtl:text-right"
					placeholder="Search..."
					type="text"
					autocomplete=""
				/>
			</div>

			{#if searchData.length > 0}
				<ul>
					{#each searchData as l, i}
						<li class="cursor-pointer px-4 py-2 hover:bg-[#61ffa06e]">
							{i + 1 + '. ' + l.item.title}
						</li>
					{/each}
				</ul>
			{:else}
				<div class="flex items-center justify-center">
					<p class="text-gray-500">No Result Found</p>
				</div>
			{/if}
		</div>
	</div>
</div>
