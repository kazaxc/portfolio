<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { afterNavigate } from "$app/navigation";
	
	let { children } = $props();

	afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
