<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';
	import CursorDot from '$lib/components/CursorDot.svelte';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	let { children } = $props();
</script>

<CursorDot />
{@render children()}
