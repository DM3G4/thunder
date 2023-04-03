<script lang="ts">
	import { SYNC, SYNC_DONE } from '../../lib/icons'
	import Icon from '../Icon.svelte'

	let className: string = ''
	export { className as class }
</script>

<!-- TODO: Implement Sync action -->
<button
	type="button"
	class="{`${className} rounded-full bg-dark-300 p-2 text-dark-500 hover:text-dark-700 focus:outline-none focus:ring-0 focus:ring-offset-current focus:ring-offset-2 `}">
	<span class="sr-only">Sync</span>
	<Icon name="{SYNC}" />
</button>
