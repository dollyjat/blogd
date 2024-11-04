<script lang="ts">
	import type { PageData } from './$types';
	import Time from 'svelte-time';

	const animates = [
		'animate-fade-left',
		'animate-fade-right',
		'animate-fade-up',
		'animate-fade-down'
	];

	function getRandomAnimation() {
		return animates[Math.floor(Math.random() * animates.length)];
	}

	let { data }: { data: PageData } = $props();
</script>

<div class="grid grid-cols-1 gap-x-3 gap-y-2 px-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
	{#each data.posts as post}
		<a href={'/blogs/' + post.slug}
			><div
				class={'w-full rounded-lg border border-bg-box bg-bg-layout shadow-lg animate-duration-[3000ms] animate-once hover:shadow-bg-box ' +
					getRandomAnimation()}
			>
				<div class="relative">
					<div
						class="absolute right-4 top-4 rounded-full bg-bg-box px-3 py-1 text-xs font-semibold text-text-small"
					>
						<Time timestamp={post.createdAt} relative />
					</div>
					<img
						class="rounded-t-md hover:animate-pulse"
						alt=""
						src={'images/' + post.slug + '.jpg'}
					/>
				</div>
				<div class="flex flex-col space-y-1.5 p-4 pb-0">
					<div
						role="heading"
						aria-level="3"
						class="line-clamp-2 py-2 text-sm font-semibold leading-none tracking-tight sm:text-lg"
					>
						{post.title}
					</div>

					<p class="line-clamp-3 text-xs text-text-small sm:text-sm">
						{post.description}
					</p>
				</div>

				<div class="p-2">
					{#each post?.tags!.slice(0, 3) as tag}
						<span class="mr-1 rounded bg-bg-box px-1 text-xs sm:text-sm">{tag + ' '}</span>
					{/each}
				</div>
			</div></a
		>
	{/each}
</div>
