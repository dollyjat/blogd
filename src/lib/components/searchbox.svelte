<script lang="ts">
	const list = [
		'Creating an Image Expand Gallery',
		'GitHub Basics Forking vs. Cloning Explained',
		'Context Api - UseContext()',
		'How to use Tailwind CSS in Next.js'
	];
</script>

<div class="absolute top-1 z-30 h-full w-full">
	<div
		class="mx-auto flex w-3/4 flex-col items-center gap-2 rounded-md border border-bg-box bg-bg-layout p-6 md:w-2/4"
	>
		<input
			type="text"
			placeholder="Search tags and titles ...."
			class="bg-bg-bg block w-3/4 rounded-lg border border-bg-box p-2.5 ps-10 text-sm text-text-layout outline-none rtl:text-right"
		/>

		<ul>
			{#each list as l, i}
				<li class="cursor-pointer px-4 py-2 hover:bg-gray-100">
					{i + 1 + '. ' + l}
				</li>
			{/each}
		</ul>
	</div>
</div>
