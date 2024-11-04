<script lang="ts">
	import { isSearchOpen, navOpen } from '$lib/store/layout.svelte';
	import { Moon, Sun, Menu, SquareX } from 'lucide-svelte';
	import { toggleMode, mode } from 'mode-watcher';

	function toggleNav() {
		navOpen.update((value) => {
			return !value;
		});
	}
</script>

<nav
	class=" w-full animate-fade-down divide-gray-200 border-b-2 border-bg-box bg-bg-layout px-2 py-2.5 text-text-layout animate-duration-[1000ms] animate-once sm:px-4"
>
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="flex items-center"
			><img
				src="https://cdn-icons-png.flaticon.com/512/10125/10125177.png"
				class="me-3 w-11"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span></a
		>
		<div class="relative hidden w-96 md:block">
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
				onclick={() => isSearchOpen.update((value) => !value)}
				class="bg-bg-bg block w-full rounded-lg border border-bg-box p-2.5 ps-10 text-sm text-text-layout outline-none rtl:text-right"
				placeholder="Search..."
				type="text"
				autocomplete=""
			/>
		</div>
		<div class="flex">
			<button
				onclick={() => isSearchOpen.update((value) => !value)}
				aria-label="Menu"
				class="me-1 inline-flex items-center justify-center rounded-lg p-2.5 text-center text-sm font-medium focus-within:outline-none focus-within:ring-4 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					color="currentColor"
					class="h-5 w-5 shrink-0"
					viewBox="0 0 24 24"
					><path
						stroke="currentColor"
						stroke-linecap="round"
						d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
						stroke-width="2"
					></path></svg
				></button
			>

			<div>
				<button
					class="inline-block rounded-lg p-2.5 text-sm hover:text-bg-box focus:outline-none"
					onclick={toggleMode}
				>
					{#if $mode === 'dark'}
						<Moon />
					{:else}
						<Sun />
					{/if}
				</button>
			</div>
			<button
				onclick={toggleNav}
				type="button"
				class="m-0.5 ms-3 whitespace-normal rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400 md:hidden"
				aria-label="Open main menu"
			>
				{#if $navOpen}
					<SquareX />
				{:else}
					<Menu />
				{/if}

				<span class="sr-only">Open main menu</span>
			</button>
		</div>
	</div>
</nav>
