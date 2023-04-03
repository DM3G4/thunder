<script lang="ts">
	let className: string = ''
	export { className as class }
	export let name!: string
	export let outline: boolean = false
	export let size: number = 24
	const styles = `font-variation-settings: 'FILL' ${outline ? 0 : 1}; font-size: ${size}px `
</script>

<div class="{className} flex justify-center items-center">
	<i class="material-symbols-outlined select-none" style="{styles}">{name}</i>
</div>
