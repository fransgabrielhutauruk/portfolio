<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroSlide from '$lib/components/HeroSlide.svelte';
	import WorkSlide from '$lib/components/WorkSlide.svelte';
	import CapabilitiesSlide from '$lib/components/CapabilitiesSlide.svelte';
	import ExperienceSlide from '$lib/components/ExperienceSlide.svelte';
	import ContactSlide from '$lib/components/ContactSlide.svelte';

	onMount(() => {
		const slides = document.querySelectorAll<HTMLElement>('#hero, .scroll-slide-curtain');

		const updateStickyOffsets = () => {
			const vh = window.innerHeight;
			slides.forEach((slide) => {
				const height = slide.offsetHeight;
				// If a slide is taller than the viewport, allow scrolling to its bottom first before sticking
				const stickyTop = Math.min(0, vh - height);
				slide.style.top = `${stickyTop}px`;
			});
		};

		updateStickyOffsets();

		const resizeObserver = new ResizeObserver(() => {
			updateStickyOffsets();
		});

		slides.forEach((slide) => resizeObserver.observe(slide));
		window.addEventListener('resize', updateStickyOffsets, { passive: true });

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', updateStickyOffsets);
		};
	});
</script>

<div class="relative min-h-screen bg-[#09090b] text-zinc-100">
	<Navbar />

	<!-- Sticky Curtain Scroll-Slide Stack (Mengikuti mekanisme video referensi Dymas Alfin) -->
	<main class="relative">
		<HeroSlide />
		<WorkSlide />
		<CapabilitiesSlide />
		<ExperienceSlide />
	</main>

	<ContactSlide />
</div>
