<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroSlide from '$lib/components/HeroSlide.svelte';
	import AboutSlide from '$lib/components/AboutSlide.svelte';
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

		let rafId = 0;
		const scheduleStickyUpdate = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				updateStickyOffsets();
			});
		};

		updateStickyOffsets();

		const resizeObserver = new ResizeObserver(() => {
			scheduleStickyUpdate();
		});

		slides.forEach((slide) => resizeObserver.observe(slide));
		window.addEventListener('resize', scheduleStickyUpdate, { passive: true });

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
			window.removeEventListener('resize', scheduleStickyUpdate);
		};
	});
</script>

<div class="relative min-h-screen bg-[#09090b] text-zinc-100">
	<Navbar />

	<!-- Sticky Curtain Scroll-Slide Stack (Mengikuti mekanisme video referensi Dymas Alfin) -->
	<main class="relative">
		<HeroSlide />
		<AboutSlide />
		<ExperienceSlide />
		<WorkSlide />
		<CapabilitiesSlide />
	</main>

	<ContactSlide />
</div>
