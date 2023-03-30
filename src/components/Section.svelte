<script lang="ts">
	import { ADD, COLLAPSE, EXPAND, MORE, SEARCH } from '../lib/icons'
	import Icon from './Icon.svelte'

	export let name!: string
</script>

<!-- TODO: Add tooltips -->
<div>
	<div class="flex flex-row justify-center items-center py-4 px-8 space-x-5">
		<div class="flex justify-center items-center bg-dark-100">
			<h2 class="text-2xl italic tracking-tight text-dark-700">{name}</h2>
		</div>
		<div class="relative flex flex-grow justify-center items-center">
			<div class="absolute inset-0 flex items-center" aria-hidden="true">
				<div class="w-full border-t border-dark-border"></div>
			</div>
			<div class="relative flex justify-center">
				<span class="isolate inline-flex -space-x-px rounded-md shadow-sm">
					<button
						type="button"
						class="relative inline-flex items-center rounded-l-md bg-dark-300 px-3 py-2 text-dark-700 hover:text-dark-900 hover:bg-dark-400 focus:z-10">
						<span class="sr-only">Add</span>
						<Icon name="{ADD}" />
					</button>
					<button
						type="button"
						class="relative inline-flex items-center bg-dark-300 px-3 py-2 text-dark-700 hover:text-dark-900 hover:bg-dark-400 focus:z-10">
						<span class="sr-only">Search</span>
						<Icon name="{SEARCH}" />
					</button>
					<!-- TODO: Define this action and/or more actions -->
					<button
						type="button"
						class="relative inline-flex items-center rounded-r-md bg-dark-300 px-3 py-2 text-dark-700 hover:text-dark-900 hover:bg-dark-400 focus:z-10">
						<span class="sr-only">More</span>
						<Icon name="{MORE}" />
					</button>
				</span>
			</div>
		</div>
		<div class="flex justify-center items-center bg-dark-100">
			<!-- TODO: Implement collapse functionality -->
			<button
				class="rounded-full text-dark-700 hover:text-dark-900 focus:outline-none focus:ring-1 focus:ring-dark-700">
				<!-- EXPAND: -translate-y-[1px] -->
				<Icon name="{EXPAND}" fill class="translate-y-[1px]" />
			</button>
		</div>
	</div>
	<slot />
</div>
