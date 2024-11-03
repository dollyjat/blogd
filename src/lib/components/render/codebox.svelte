<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import { Clipboard, ClipboardCheck } from 'lucide-svelte';

	interface Props {
		lang: string;
		text: string;
	}

	let { lang, text }: Props = $props();

	let coping = $state(false);

	function copy() {
		navigator.clipboard.writeText(text);
		coping = true;
		setTimeout(() => {
			coping = false;
		}, 1000);
	}
</script>

<div class="flex w-full flex-col py-5">
	<div
		class="flex justify-between rounded-t-md bg-bg-box px-5 py-2 text-text-small"
	>
		<span>{lang}</span><button onclick={copy}
			>{#if !coping}
				<Clipboard />
			{:else}
				<ClipboardCheck class="animate-ping animate-duration-[2000ms]" />
			{/if}</button
		>
	</div>
	<HighlightSvelte code={text}></HighlightSvelte>
</div>
