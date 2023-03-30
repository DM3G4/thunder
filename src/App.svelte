<script lang="ts">
	import './app.css'
	import Dashboard from './components/Dashboard.svelte'
	import Header from './components/Header.svelte'
	import Section from './components/Section.svelte'
</script>

<div class="h-full min-h-screen bg-dark-100">
	<!-- App Layout (Dashboard) -->
	<Dashboard>
		<!-- App content -->
		<!-- TODO: Make header title dynamic -->
		<Header />
		<Section name="Watchlist" />
		<Section name="Favorites" />
		<Section name="Seen" />
	</Dashboard>
</div>
