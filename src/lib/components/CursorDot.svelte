<script lang="ts">
	import { onMount } from 'svelte';

	let dotEl = $state<HTMLDivElement | null>(null);
	let visible = $state(false);
	let interactive = $state(false);
	let pressed = $state(false);
	let enabled = $state(false);

	onMount(() => {
		// Only activate on devices with a fine pointer (desktop/laptop mouse)
		const finePointerQuery = window.matchMedia('(pointer: fine)');
		if (!finePointerQuery.matches) return;

		enabled = true;
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		let targetX = window.innerWidth / 2;
		let targetY = window.innerHeight / 2;
		let currentX = targetX;
		let currentY = targetY;
		let rafId = 0;

		const lerpFactor = reduceMotion ? 1 : 0.22;

		const render = () => {
			currentX += (targetX - currentX) * lerpFactor;
			currentY += (targetY - currentY) * lerpFactor;

			if (dotEl) {
				dotEl.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) translate(-50%, -50%)`;
			}

			rafId = window.requestAnimationFrame(render);
		};

		const handleMouseMove = (event: MouseEvent) => {
			targetX = event.clientX;
			targetY = event.clientY;

			if (!visible) {
				currentX = targetX;
				currentY = targetY;
				visible = true;
			}

			const el = event.target as HTMLElement | null;
			interactive = Boolean(
				el?.closest('a, button, [role="button"], input, textarea, select, label')
			);
		};

		const handleMouseDown = () => {
			pressed = true;
		};

		const handleMouseUp = () => {
			pressed = false;
		};

		const handleMouseLeave = () => {
			visible = false;
		};

		const handleMouseEnter = () => {
			visible = true;
		};

		rafId = window.requestAnimationFrame(render);

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		window.addEventListener('mousedown', handleMouseDown, { passive: true });
		window.addEventListener('mouseup', handleMouseUp, { passive: true });
		document.documentElement.addEventListener('mouseleave', handleMouseLeave);
		document.documentElement.addEventListener('mouseenter', handleMouseEnter);

		return () => {
			window.cancelAnimationFrame(rafId);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
			document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
		};
	});
</script>

{#if enabled}
	<div
		bind:this={dotEl}
		aria-hidden="true"
		class="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform transition-opacity duration-300 {visible
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div
			class="rounded-full transition-all duration-300 ease-out {pressed
				? 'h-2.5 w-2.5 scale-75 bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.95)]'
				: interactive
					? 'h-5 w-5 bg-emerald-400/35 ring-1 ring-emerald-400/80 shadow-[0_0_22px_rgba(16,185,129,0.65)]'
					: 'h-3 w-3 bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.85)]'}"
		></div>
	</div>
{/if}
