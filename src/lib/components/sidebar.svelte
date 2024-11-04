<script>
	import { Heart, Save, Twitter, Github } from 'lucide-svelte';
	import { navOpen } from '$lib/store/layout.svelte';
	import { DiscordSolid, GithubSolid } from 'flowbite-svelte-icons';

	const item = {
		img: {
			src: 'https://flowbite-svelte.com/images/profile-picture-3.webp',
			alt: 'Michael Gough'
		},
		name: 'Michael Gough',
		email: 'email@windster.com',
		value: '$67'
	};

	let nav_Open = $state(false);

	let userLogin = false;

	navOpen.subscribe((value) => {
		nav_Open = value;
	});
</script>

<aside
	class:hidden={!nav_Open}
	class="fixed z-40 h-full w-fit animate-fade-right border-r-2 border-bg-box md:static md:block"
	aria-label="Sidebar"
>
	<div
		class="h-full w-64 overflow-y-auto bg-bg-layout px-3 py-6 text-text-layout"
	>
		<ul class="space-y-2">
			<li class="md:pb-16">
				{#if userLogin}
					<div
						class="flex flex-col items-center justify-center gap-3 rounded-md bg-bg-box py-3"
					>
						<img
							src={item.img.src}
							alt={item.img.alt}
							class="h-14 w-14 flex-shrink-0 rounded-full bg-gray-100 object-cover"
						/>
						<div class="min-w-0 flex-1">
							<p class="font-mediumtext-white truncate text-sm">
								{item.name}
							</p>
							<p class="truncate text-sm text-zinc-500">
								{item.email}
							</p>
						</div>
					</div>
				{:else}
					<div>
						<button
							type="button"
							class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-bg-box px-4 py-3 text-sm font-medium text-text-layout focus:outline-none disabled:pointer-events-none disabled:opacity-50"
						>
							<Github class=" h-6 w-6" color="rgb(57 211 116)" />
							Login With Github
						</button>
					</div>
				{/if}
			</li>
			<li>
				<a
					href="/"
					class="flex items-center rounded-lg p-2 text-base font-normal hover:bg-bg-box"
					><Heart class="0 h-6 w-6 transition duration-75  " /><span
						class="ms-3">My Likes</span
					>
				</a>
			</li>
			<li>
				<a
					href="/"
					class="flex items-center rounded-lg p-2 text-base font-normal hover:bg-bg-box"
					><Save class="0 h-6 w-6 transition duration-75" /><span
						class="ms-3">My Saves</span
					>
				</a>
			</li>
			<li class="py-3 md:py-7">
				<hr />
			</li>
			<li>
				<a
					href="/"
					class="flex items-center rounded-lg p-2 text-base font-normal hover:bg-bg-box"
					><DiscordSolid class="0 h-6 w-6 transition duration-75" /><span
						class="ms-3">Join Server</span
					>
				</a>
			</li>
			<li>
				<a
					href="/"
					class="flex items-center rounded-lg p-2 text-base font-normal hover:bg-bg-box"
					><Twitter class="0 h-6 w-6 transition duration-75" /><span
						class="ms-3">Follow Us</span
					>
				</a>
			</li>
			<li>
				<a
					href="/"
					class="flex items-center rounded-lg p-2 text-base font-normal hover:bg-bg-box"
					><GithubSolid class="0 h-6 w-6 transition duration-75" /><span
						class="ms-3">Follow Us</span
					>
				</a>
			</li>
		</ul>
	</div>
</aside>
