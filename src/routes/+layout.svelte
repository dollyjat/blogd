<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource-variable/noto-serif';
	import '../app.css';
	import Searchbox from '$lib/components/searchbox.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<div class="flex h-screen w-full flex-col">
	<!-- Navbar fixed at the top -->
	<div class="sticky top-0 z-10">
		<Navbar />
	</div>

	<div class="flex h-full w-full md:overflow-hidden">
		<!-- Sidebar fixed on the left -->
		<div class="sticky left-0 h-full">
			<Sidebar />
		</div>

		<!-- Main content area that scrolls -->
		<div class="flex-1 p-4 md:overflow-y-auto">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.sticky {
		position: sticky;
	}
	.flex-1 {
		flex: 1;
	}
</style>
