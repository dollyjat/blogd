<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource-variable/noto-serif';
	import '../app.css';
	import Searchbox from '$lib/components/searchbox.svelte';
	import { isSearchOpen } from '$lib/store/layout.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
{#if $isSearchOpen}
	<Searchbox />
{/if}
<div class="flex h-screen w-full flex-col">
	<!-- Navbar fixed at the top -->
	<div class="sticky">
		<Navbar />
	</div>
	<div class="flex h-auto w-full overflow-hidden">
		<!-- Sidebar fixed on the left -->
		<Sidebar />

		<!-- Main content area that scrolls -->
		<div class="flex-1 overflow-scroll p-4">
			{@render children()}
		</div>
	</div>
</div>
