<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Award,
		BookOpen,
		CheckCircle2,
		ChevronLeft,
		ChevronRight,
		Clock,
		ExternalLink,
		ShieldCheck
	} from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { certifications } = portfolioData;

	let currentIndex = $state(0);
	let visibleCount = $state(3);

	let maxIndex = $derived(Math.max(0, certifications.length - visibleCount));

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
			if (window.innerWidth >= 1024) {
				visibleCount = 3;
			} else if (window.innerWidth >= 768) {
				visibleCount = 2;
			} else {
				visibleCount = 1;
			}

			if (currentIndex > Math.max(0, certifications.length - visibleCount)) {
				currentIndex = Math.max(0, certifications.length - visibleCount);
			}
		};

		updateVisibleCount();
		window.addEventListener('resize', updateVisibleCount, { passive: true });
		return () => window.removeEventListener('resize', updateVisibleCount);
	});
</script>

<section
	id="certifications"
	aria-label="Sertifikasi & Pelatihan"
	class="scroll-slide-curtain z-60 min-h-screen flex flex-col justify-center rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/35 bg-[#0b1110] px-4 pt-16 pb-28 sm:px-8 sm:pt-24 sm:pb-40"
>
	<!-- Subtle Emerald Studio Glow -->
	<div
		class="pointer-events-none absolute inset-0 rounded-t-[2.25rem] sm:rounded-t-[3rem] bg-[radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.08),transparent_55%)]"
	></div>

	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="relative z-10 mx-auto mb-6 h-1.5 w-16 rounded-full bg-emerald-500/35"></div>

	<div class="relative z-10 mx-auto w-full max-w-[1380px]">
		<!-- Section Header with Giant Watermark -->
		<div class="scroll-reveal-header relative flex flex-col items-center justify-center py-4 text-center">
			<span
				aria-hidden="true"
				class="watermark-title text-[clamp(3.1rem,9.8vw,8.6rem)] uppercase tracking-tighter"
			>
				CREDENTIALS
			</span>
			<h2
				class="font-display relative -mt-8 sm:-mt-14 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100"
			>
				<span class="text-emerald-400">/</span>SERTIFIKASI &amp; PELATIHAN
			</h2>
			<p class="mt-3 max-w-xl text-sm sm:text-base text-zinc-400">
				Validasi kompetensi profesi nasional serta pelatihan teknis intensif untuk menjaga standar rekayasa perangkat lunak.
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
					aria-label="Sertifikasi sebelumnya"
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
					aria-label="Sertifikasi selanjutnya"
					class="inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition duration-200 {currentIndex >=
					maxIndex
						? 'border-white/10 bg-zinc-900/40 text-zinc-600 cursor-not-allowed'
						: 'border-white/15 bg-zinc-900/90 text-zinc-200 shadow-lg hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-zinc-950 cursor-pointer'}"
				>
					<ChevronRight class="h-5 w-5" />
				</button>
			</div>
		</div>

		<!-- Horizontal 3-Column Carousel with Side Prev / Next Buttons on Desktop -->
		<div class="relative mt-4 md:mt-10 flex items-center md:gap-5">
			<!-- Left Side Prev Button (Desktop / Tablet Only) -->
			<button
				type="button"
				onclick={prevSlide}
				disabled={currentIndex === 0}
				aria-label="Sertifikasi sebelumnya"
				class="z-20 hidden md:inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition duration-200 {currentIndex ===
				0
					? 'border-white/10 bg-zinc-900/40 text-zinc-600 cursor-not-allowed'
					: 'border-white/15 bg-zinc-900/90 text-zinc-200 shadow-lg hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-zinc-950 cursor-pointer'}"
			>
				<ChevronLeft class="h-6 w-6" />
			</button>

			<!-- Carousel Track Viewport -->
			<div class="min-w-0 flex-1 overflow-hidden py-4 -my-4">
				<div
					class="flex w-full gap-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
					style="transform: {currentIndex === 0
						? 'none'
						: `translateX(calc(-${currentIndex} * (${
								visibleCount === 3
									? '33.333333% + 8px'
									: visibleCount === 2
										? '50% + 12px'
										: '100% + 24px'
							})))`};"
				>
					{#each certifications as item (item.id)}
						<article
							class="group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-7 transition-colors duration-300 {item.isPrimary
								? 'border-emerald-500/45 bg-gradient-to-br from-[#0e221c] via-[#0a1512] to-[#090c0e] shadow-[inset_0_1px_0_rgba(52,211,153,0.2),inset_0_0_40px_rgba(16,185,129,0.08)]'
								: 'border-white/10 bg-[#090c0e]/95 hover:border-emerald-500/40 hover:shadow-[inset_0_0_32px_rgba(16,185,129,0.07)]'} {visibleCount ===
							3
								? 'w-[calc((100%-48px)/3)]'
								: visibleCount === 2
									? 'w-[calc(50%-12px)]'
									: 'w-full'}"
						>
							<div>
								<!-- Top Meta Row: Category Badge & Status / Duration Pill (Single-Line Aligned) -->
								<div class="flex items-center justify-between gap-2">
									<span
										class="font-mono-code inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-medium {item.isPrimary
											? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-300'
											: 'border-white/10 bg-zinc-900 text-zinc-300'}"
									>
										{#if item.category === 'Professional Certification'}
											<ShieldCheck class="h-3.5 w-3.5 shrink-0 text-emerald-400" />
										{:else if item.category === 'Skill Certification'}
											<Award class="h-3.5 w-3.5 shrink-0 text-emerald-400" />
										{:else}
											<BookOpen class="h-3.5 w-3.5 shrink-0 text-emerald-400" />
										{/if}
										<span>{item.category}</span>
									</span>

									<span
										class="font-mono-code inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300"
									>
										{#if item.category === 'Intensive Course'}
											<Clock class="h-3 w-3 shrink-0 text-emerald-400" />
										{/if}
										<span>{item.badgeText}</span>
									</span>
								</div>

								<!-- Number & Year -->
								<div class="mt-5 flex items-center gap-2 text-xs font-mono-code text-emerald-400">
									<span>/{item.number}</span>
									<span>•</span>
									<span>{item.year}</span>
								</div>

								<!-- Title -->
								<h3
									class="font-display mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-emerald-300"
								>
									{item.title}
								</h3>

								<!-- Issuer & Instructor -->
								<p class="mt-1.5 text-xs sm:text-sm font-medium text-[#D4D4D8]">
									{item.issuer}
									{#if item.instructor}
										<span class="text-zinc-400"> • Instruktur: {item.instructor}</span>
									{/if}
								</p>

								<!-- Description -->
								<p class="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
									{item.description}
								</p>
							</div>

							<!-- Bottom Skills & Credential Action / Status Note (Aligned Divider & Footer) -->
							<div class="mt-6 border-t border-white/10 pt-4">
								<div class="flex flex-wrap gap-1.5">
									{#each item.skills as skill}
										<span
											class="font-mono-code rounded-full border border-white/10 bg-zinc-900/90 px-2.5 py-1 text-[11px] text-zinc-300"
										>
											{skill}
										</span>
									{/each}
								</div>

								<div class="mt-4 flex justify-end">
									{#if item.credentialUrl}
										<a
											href={item.credentialUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500 hover:text-zinc-950"
										>
											<span>Lihat Sertifikat</span>
											<ExternalLink class="h-3.5 w-3.5" />
										</a>
									{:else if item.credentialNote}
										<span
											class="font-mono-code inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/70 px-3.5 py-1.5 text-xs font-medium text-zinc-400"
										>
											<CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
											<span>{item.credentialNote}</span>
										</span>
									{/if}
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
				aria-label="Sertifikasi selanjutnya"
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
					aria-label="Ke slide sertifikasi {idx + 1}"
					class="h-1.5 rounded-full transition-all duration-300 cursor-pointer {currentIndex === idx
						? 'w-7 bg-emerald-400'
						: 'w-2 bg-white/20 hover:bg-white/40'}"
				></button>
			{/each}
		</div>
	</div>
</section>
