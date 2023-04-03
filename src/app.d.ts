// This adds the types for Svelte custom events
declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:outclick'?: () => void
	}
}
