<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import CodeBox from '$lib/components/render/codebox.svelte';

	let { data }: { data: PageData } = $props();

	// const handleParsed = async (parsedTokens: Token[]) => {
	// 	const Heading: string[] = [];
	// 	for (const token of parsedTokens) {
	// 		if (token.type === 'heading' && token.tokens) {
	// 			let text = '';
	// 			for (const t of token.tokens) {
	// 				if (t.type) {
	// 					text += t.text;
	// 				}
	// 			}
	// 			console.log(text);
	// 			Heading.push(text);
	// 		}
	// 	}
	// 	console.log('🚀  handleParsed  Heading :- ', Heading);
	// };
</script>

<div class="markdown w-full">
	<SvelteMarkdown source={data.postMd} renderers={{ code: CodeBox }} />
</div>
