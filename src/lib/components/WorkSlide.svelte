<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { projects } = portfolioData;

	let currentIndex = $state(0);
	let visibleCount = $state(2);

	let maxIndex = $derived(Math.max(0, projects.length - visibleCount));

	function prevSlide() {
		if (currentIndex > 0) {
			currentIndex -= 1;
		}
	}

	function nextSlide() {
		if (currentIndex < maxIndex) {
			currentIndex += 1;
		}
	}

	onMount(() => {
		const updateVisibleCount = () => {
			visibleCount = window.innerWidth >= 1024 ? 2 : 1;
			if (currentIndex > Math.max(0, projects.length - visibleCount)) {
				currentIndex = Math.max(0, projects.length - visibleCount);
			}
		};

		updateVisibleCount();
		window.addEventListener('resize', updateVisibleCount, { passive: true });
		return () => window.removeEventListener('resize', updateVisibleCount);
	});
</script>

<section
	id="work"
	aria-label="Proyek Pilihan"
	class="scroll-slide-curtain z-40 min-h-screen rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/30 bg-[#11141b] px-4 pt-16 pb-28 sm:px-8 sm:pt-24 sm:pb-40"
>
	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="mx-auto mb-6 h-1.5 w-16 rounded-full bg-emerald-500/30"></div>

	<div class="mx-auto max-w-[1380px]">
		<!-- Section Header with Giant Watermark -->
		<div class="scroll-reveal-header relative flex flex-col items-center justify-center py-4 text-center">
			<span
				aria-hidden="true"
				class="watermark-title text-[clamp(3.6rem,11.5vw,9.8rem)] uppercase tracking-tighter"
			>
				PROJECTS
			</span>
			<h2
				class="font-display relative -mt-8 sm:-mt-14 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100"
			>
				<span class="text-emerald-400">/</span>SELECTED WORK
			</h2>
			<p class="mt-3 max-w-xl text-sm sm:text-base text-zinc-400">
				Kumpulan aplikasi web Full-Stack siap produksi yang dirancang dan dikembangkan secara end-to-end.
			</p>
		</div>

		<!-- Mobile Top Navigation Bar (Above Card so Card Gets Full Width on Phone) -->
		<div class="mt-8 flex items-center justify-between md:hidden">
			<span class="font-mono-code text-xs text-zinc-400">
				SLIDE <strong class="text-emerald-400">0{currentIndex + 1}</strong> / 0{maxIndex + 1}
			</span>

			<div class="flex items-center gap-2.5">
				<button
					type="button"
					onclick={prevSlide}
					disabled={currentIndex === 0}
					aria-label="Proyek sebelumnya"
					class="inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition duration-200 {currentIndex ===
					0
						? 'border-white/10 bg-zinc-900/40 text-zinc-600 cursor-not-allowed'
						: 'border-white/15 bg-zinc-900/90 text-zinc-200 shadow-lg hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-zinc-950 cursor-pointer'}"
				>
					<ChevronLeft class="h-5 w-5" />
				</button>

				<button
					type="button"
					onclick={nextSlide}
					disabled={currentIndex >= maxIndex}
					aria-label="Proyek selanjutnya"
					class="inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition duration-200 {currentIndex >=
					maxIndex
						? 'border-white/10 bg-zinc-900/40 text-zinc-600 cursor-not-allowed'
						: 'border-white/15 bg-zinc-900/90 text-zinc-200 shadow-lg hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-zinc-950 cursor-pointer'}"
				>
					<ChevronRight class="h-5 w-5" />
				</button>
			</div>
		</div>

		<!-- Horizontal 2-Column Carousel with Side Prev / Next Buttons on Desktop -->
		<div class="relative mt-4 md:mt-10 flex items-center md:gap-5">
			<!-- Left Side Prev Button (Desktop / Tablet Only) -->
			<button
				type="button"
				onclick={prevSlide}
				disabled={currentIndex === 0}
				aria-label="Proyek sebelumnya"
				class="z-20 hidden md:inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition duration-200 {currentIndex ===
				0
					? 'border-white/10 bg-zinc-900/40 text-zinc-600 cursor-not-allowed'
					: 'border-white/15 bg-zinc-900/90 text-zinc-200 shadow-lg hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-zinc-950 cursor-pointer'}"
			>
				<ChevronLeft class="h-6 w-6" />
			</button>

			<!-- Carousel Track Viewport -->
			<div class="min-w-0 flex-1 overflow-hidden py-2 -my-2">
				<div
					class="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] {visibleCount === 2
						? 'gap-8'
						: 'gap-6'}"
					style="transform: {currentIndex === 0
						? 'none'
						: `translateX(calc(-${currentIndex} * (${visibleCount === 2 ? '50% + 16px' : '100% + 24px'})))`};"
				>
					{#each projects as project (project.id)}
						<article
							class="group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0b0e13] p-5 sm:p-7 transition-colors duration-300 hover:border-emerald-500/45 hover:shadow-[inset_0_0_36px_rgba(16,185,129,0.08)] {visibleCount ===
							2
								? 'w-[calc(50%-16px)]'
								: 'w-full'}"
						>
							<div>
								<!-- Top Minimalist Browser Window Frame around Screenshot -->
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="relative block overflow-hidden rounded-2xl border border-white/10 bg-[#131720] p-2 sm:p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 group-hover:border-emerald-500/35"
								>
									<!-- Minimalist Browser Top Bar (Window Dots + Domain Pill + Open Icon) -->
									<div class="mb-2 flex items-center justify-between gap-2 px-1.5 py-0.5">
										<div class="flex items-center gap-1.5" aria-hidden="true">
											<span class="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors group-hover:bg-rose-400/70"></span>
											<span class="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors group-hover:bg-amber-400/70"></span>
											<span class="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors group-hover:bg-emerald-400/80"></span>
										</div>

										<div
											class="font-mono-code flex items-center gap-1.5 rounded-md border border-white/8 bg-[#0b0e13]/90 px-3 py-0.5 text-[11px] text-zinc-400 transition-colors group-hover:border-emerald-500/25 group-hover:text-emerald-300"
										>
											<span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
											<span class="truncate">{project.liveLabel}</span>
										</div>

										<span
											class="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#0b0e13]/80 text-zinc-400 transition group-hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950"
										>
											<ArrowUpRight class="h-3.5 w-3.5" />
										</span>
									</div>

									<!-- Screenshot Viewport with Subtle Inner Border -->
									<div class="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 aspect-[16/9]">
										<!-- Multi-step pre-filtered responsive srcset prevents 6.5x browser downscale blur -->
										<img
											src={project.image}
											srcset="{project.image.replace('.webp', '-640w.webp')} 640w, {project.image.replace('.webp', '-1280w.webp')} 1280w, {project.image} 2560w"
											sizes="(min-width: 1024px) 540px, 92vw"
											alt={project.title}
											loading="lazy"
											decoding="async"
											width="1280"
											height="720"
											class="block h-full w-full object-cover object-top"
										/>
										<!-- Subtle Inner Vignette Overlay so Bright Screenshots Blend Naturally -->
										<div
											class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/20"
										></div>
									</div>
								</a>

								<!-- Project Title & Summary -->
								<div class="mt-6">
									<div class="flex items-center gap-2 text-xs font-mono-code text-emerald-400">
										<span>/{project.number}</span>
										<span>•</span>
										<span>{project.category}</span>
									</div>

									<h3
										class="font-display mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-300 transition-colors"
									>
										{project.title}
									</h3>

									<p class="mt-2.5 text-sm leading-relaxed text-zinc-400">
										{project.summary}
									</p>

									<!-- Technical Full-Stack Highlights -->
									<ul class="mt-4 space-y-2 border-t border-white/10 pt-4">
										{#each project.highlights as point}
											<li class="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
												<CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
												<span>{point}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>

							<!-- Bottom Tech-Stack Badges & Direct Live Demo CTA -->
							<div class="mt-6 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-4">
								<div class="flex flex-wrap gap-1.5">
									{#each project.tags as tag}
										<span
											class="font-mono-code rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300"
										>
											{tag}
										</span>
									{/each}
								</div>


							</div>
						</article>
					{/each}
				</div>
			</div>

			<!-- Right Side Next Button (Desktop / Tablet Only) -->
			<button
				type="button"
				onclick={nextSlide}
				disabled={currentIndex >= maxIndex}
				aria-label="Proyek selanjutnya"
				class="z-20 hidden md:inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition duration-200 {currentIndex >=
				maxIndex
					? 'border-white/10 bg-zinc-900/40 text-zinc-600 cursor-not-allowed'
					: 'border-white/15 bg-zinc-900/90 text-zinc-200 shadow-lg hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-zinc-950 cursor-pointer'}"
			>
				<ChevronRight class="h-6 w-6" />
			</button>
		</div>

		<!-- Subtle Bottom Slide Dots Indicator -->
		<div class="mt-6 flex items-center justify-center gap-2">
			{#each Array(maxIndex + 1) as _, idx}
				<button
					type="button"
					onclick={() => (currentIndex = idx)}
					aria-label="Ke slide proyek {idx + 1}"
					class="h-1.5 rounded-full transition-all duration-300 cursor-pointer {currentIndex === idx
						? 'w-7 bg-emerald-400'
						: 'w-2 bg-white/20 hover:bg-white/40'}"
				></button>
			{/each}
		</div>
	</div>
</section>
