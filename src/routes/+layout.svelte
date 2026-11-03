<script lang="ts">
	import '../app.css';
	import CursorDot from '$lib/components/CursorDot.svelte';

	let { children } = $props();
</script>

<CursorDot />
{@render children()}
