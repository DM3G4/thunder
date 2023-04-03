<script lang="ts">
	import Icon from '../Icon.svelte'
	import { VOLT, USER, MENU, CLOSE, SETTINGS, SIGN_OUT } from '../../lib/icons'
	import Separator from '../Separator.svelte'
	import { clickOutside } from '../../lib/events'
	import { slide } from 'svelte/transition'
	import Transition from 'svelte-class-transition'

	// <!-- TODO: Implement Sync action -->
	import SyncButton from './SyncButton.svelte'

	// <!-- TODO: Add tooltips -->
	// <!-- TODO: Double check aria attributes -->
	// <!-- TODO: Implement user account info -->

	let showDropdown: boolean = false
	let isCollapsed: boolean = true

	const userOptions = [
		{
			name: 'Settings',
			icon: SETTINGS,
			// <!-- TODO: Implement settings action -->
			action: () => {},
		},
		{
			name: 'Sign out',
			icon: SIGN_OUT,
			// <!-- TODO: Implement sign out action -->
			action: () => {},
		},
	]
</script>

<div class="min-h-full">
	<nav class="border-b border-dark-border bg-dark-200">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<div class="flex">
					<div class="flex flex-shrink-0 items-center">
						<Icon name="{VOLT}" class="rounded-full bg-red w-10 h-10 text-dark-200" size="{32}" />
					</div>
					<div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
						<!-- TODO: Implement tabs logic -->
						<!-- TODO: Remove duplicate tabs logic -->
						<!-- Current: "border-red text-dark-900", Default: "border-transparent text-dark-500 hover:border-dark-900 hover:text-dark-900" -->
						<a
							href="/"
							class="border-red text-dark-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
							aria-current="page">Movies</a>

						<a
							href="/"
							class="border-transparent text-dark-500 hover:border-dark-900 hover:text-dark-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
							>Series</a>

						<a
							href="/"
							class="border-transparent text-dark-500 hover:border-dark-900 hover:text-dark-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
							>Anime</a>
					</div>
				</div>

				<div class="hidden sm:ml-6 sm:flex sm:items-center">
					<SyncButton class="m-3" />
					<Separator />

					<!-- Profile dropdown -->
					<div
						class="relative ml-3"
						use:clickOutside
						on:outclick="{() => {
							showDropdown = false
						}}">
						<div>
							<button
								type="button"
								class="flex max-w-xs items-center rounded-full text-sm focus:outline-none text-dark-500 focus:ring-0 focus:ring-offset-2 focus:ring-offset-current"
								aria-expanded="{showDropdown}"
								aria-haspopup="true"
								on:click="{() => {
									showDropdown = !showDropdown
								}}">
								<span class="sr-only">Open user menu</span>
								<Icon class="h-10 w-10 rounded-full text-dark-500 bg-dark-300" name="{USER}" />
							</button>
						</div>
						<Transition
							toggle="{showDropdown}"
							transitions="transition transform"
							inTransition="ease-out duration-200"
							inState="opacity-0 scale-95"
							onState="opacity-100 scale-100"
							outState="opacity-0 scale-95"
							outTransition="ease-in duration-75">
							<div
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-dark-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-200"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1">
								{#each userOptions as option}
									<button
										class="flex justify-between w-full px-4 py-2 text-sm text-dark-800 font-semibold hover:bg-dark-200 hover:border-l-2  border-dark-900"
										role="menuitem"
										tabindex="-1"
										on:click="{option.action}"
										>{option.name} <Icon name="{option.icon}" size="{20}" class="text-dark-600" /></button>
								{/each}
							</div>
						</Transition>
					</div>
				</div>

				<!-- Mobile menu collapse button -->
				<div class="-mr-2 flex items-center sm:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md bg-dark-300 p-2 text-dark-500 hover:bg-dark-200 focus:outline-none focus:ring-1 focus:ring-dark-border focus:ring-offset-2 focus:ring-offset-current"
						aria-controls="mobile-menu"
						aria-expanded="false"
						on:click="{() => {
							isCollapsed = !isCollapsed
						}}">
						<span class="sr-only">Open main menu</span>
						<Icon name="{isCollapsed ? CLOSE : MENU}" class="h-6 w-6" />
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if isCollapsed}
			<div class="sm:hidden" id="mobile-menu" transition:slide="{{ duration: 500 }}">
				<!-- Mobile tabs section -->
				<div class="space-y-1 pt-2 pb-3">
					<!-- TODO: Make tabs into iterable object -->
					<!-- TODO: Implement tab logic here too -->
					<!-- Current: "border-red bg-dark-300 text-dark-900", Default: "border-transparent text-dark-500 hover:border-dark-900 hover:bg-dark-300 hover:text-dark-900" -->
					<a
						href="/"
						class="border-red bg-dark-300 text-dark-900 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
						aria-current="page">Movies</a>

					<a
						href="/"
						class="border-transparent text-dark-500 hover:border-dark-900 hover:bg-dark-300 hover:text-dark-900 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
						>Series</a>

					<a
						href="/"
						class="border-transparent text-dark-500 hover:border-dark-900 hover:bg-dark-300 hover:text-dark-900 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
						>Anime</a>
				</div>
				<!-- Mobile user options section -->
				<div class="border-t border-dark-border pt-4 pb-3">
					<div class="flex items-center px-4">
						<div class="flex-shrink-0">
							<Icon class="h-10 w-10 rounded-full text-dark-500 bg-dark-300" name="{USER}" />
						</div>
						<div class="ml-3">
							<!-- TODO: Implement account info here -->
							<div class="text-base font-medium text-dark-800">Tom Nook</div>
							<div class="text-sm font-medium text-dark-500">tom@example.com</div>
						</div>

						<SyncButton class="ml-auto flex-shrink-0" />
					</div>
					<div class="mt-3 space-y-1">
						{#each userOptions as option}
							<button
								class="flex w-full justify-between pl-3 pr-4 py-2 text-base font-medium text-dark-500 hover:bg-dark-300 hover:text-dark-900 hover:border-dark-900 border-transparent border-l-4"
								on:click="{option.action}">
								{option.name}
								<Icon name="{option.icon}" class="text-dark-400 mr-2" />
							</button>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<!-- App content -->
	<main>
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</div>
