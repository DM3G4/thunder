<script lang="ts">
  let className: string = ""
  export { className as class }
  export let name!: string
  export let fill: boolean = false
  export let weight: number = 400
  export let size: number = 48
  const styles = `font-variation-settings: 'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size};`
</script>

<div class="{className}">
  <i class="material-symbols-outlined select-none" style="{styles}">{name}</i>
</div>
