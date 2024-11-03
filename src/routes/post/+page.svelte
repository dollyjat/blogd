<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Codebox from '$lib/components/render/codebox.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="markdown w-full">
	<SvelteMarkdown renderers={{ code: Codebox }} source={data.postMd} />
</div>
