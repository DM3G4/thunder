<script lang="ts">
	import Icon from './Icon.svelte'
	import { SYNC, VOLT, USER, MENU, CLOSE, SYNC_DONE } from '../lib/icons'

	// <!-- TODO: Implement dropdown logic -->
	let showDropdown: boolean = false
	let showMenu: boolean = false // Collapsed menu
</script>

<div class="min-h-full">
	<nav class="border-b border-dark-border bg-dark-200">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<div class="flex">
					<div class="flex flex-shrink-0 items-center">
						<Icon name="{VOLT}" class="rounded-full bg-red w-10 h-10 text-dark-200" fill />
					</div>
					<div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
						<!-- TODO: Implement tabs logic -->
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
					<!-- TODO: Implement syncing logic -->
					<button
						type="button"
						class="rounded-full p-2 m-3 text-dark-500 hover:text-dark-700 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-current">
						<Icon name="{SYNC}" fill />
					</button>

					<!-- Separator -->
					<div class="h-6 w-px bg-dark-border"></div>

					<!-- TODO: Implement dropdown logic -->
					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								type="button"
								class="flex max-w-xs items-center rounded-full text-sm focus:outline-none text-dark-500 focus:ring-0 focus:ring-offset-2 focus:ring-offset-current"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true">
								<span class="sr-only">Open user menu</span>
								<Icon class="h-10 w-10 rounded-full text-dark-500 bg-dark-300" name="{USER}" fill />
							</button>
						</div>
						<!-- TODO: Implement dropdown -->
						{#if showDropdown}
							<!--
              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
							<div
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1">
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Your Profile</a>

								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-1">Settings</a>

								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2">Sign out</a>
							</div>
						{/if}
					</div>
				</div>
				<div class="-mr-2 flex items-center sm:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md bg-dark-300 p-2 text-dark-500 hover:bg-dark-200 focus:outline-none focus:ring-1 focus:ring-dark-border focus:ring-offset-2 focus:ring-offset-current"
						aria-controls="mobile-menu"
						aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						{#if showMenu}
							<Icon name="{CLOSE}" class="h-6 w-6" />
						{:else}
							<Icon name="{MENU}" class="h-6 w-6" />
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		{#if true}
			<div class="sm:hidden" id="mobile-menu">
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
				<div class="border-t border-dark-border pt-4 pb-3">
					<div class="flex items-center px-4">
						<div class="flex-shrink-0">
							<Icon class="h-10 w-10 rounded-full text-dark-500 bg-dark-300" name="{USER}" fill />
						</div>
						<div class="ml-3">
							<!-- TODO: Implement account info here -->
							<div class="text-base font-medium text-dark-800">Tom Nook</div>
							<div class="text-sm font-medium text-dark-500">tom@example.com</div>
						</div>
						<button
							type="button"
							class="ml-auto flex-shrink-0 rounded-full bg-dark-300 p-2 text-dark-500 hover:text-dark-700 focus:outline-none focus:ring-0 focus:ring-offset-current focus:ring-offset-2">
							<span class="sr-only">View notifications</span>
							<Icon name="{SYNC}" fill />
						</button>
					</div>
					<div class="mt-3 space-y-1">
						<a
							href="/"
							class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-dark-300 hover:text-dark-900"
							>Settings</a>

						<a
							href="/"
							class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-dark-300 hover:text-dark-900"
							>Sign out</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<div class="py-10">
		<main>
			<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>
</div>
