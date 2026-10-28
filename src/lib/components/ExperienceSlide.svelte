<script lang="ts">
	import { ArrowUpRight, Award, Briefcase, GraduationCap } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { experiences } = portfolioData;
	let hoveredId = $state<string | null>(experiences[0].id);
</script>

<section
	id="experience"
	class="scroll-slide-curtain z-40 min-h-screen rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/35 bg-[#07120e] px-4 py-20 sm:px-8 sm:py-28"
>
	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="mx-auto mb-8 h-1.5 w-16 rounded-full bg-emerald-400/35"></div>

	<div class="mx-auto max-w-[1380px]">
		<!-- Section Header with Giant Watermark (00:11-00:12 Reference: EXPERIENCE on dark contrasting slide) -->
		<div class="scroll-reveal-header relative py-4">
			<span
				aria-hidden="true"
				class="watermark-title block text-[clamp(3.4rem,10.5vw,9.2rem)] uppercase tracking-tighter"
			>
				EXPERIENCE
			</span>
			<div class="relative -mt-6 sm:-mt-12 flex flex-wrap items-end justify-between gap-4">
				<h2 class="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
					<span class="text-emerald-400">/</span>EXPERIENCE &amp; CREDENTIALS
				</h2>
				<span
					class="font-mono-code rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300"
				>
					Fresh Graduate • Full-Stack Track
				</span>
			</div>
		</div>

		<!-- Horizontal Experience & Certification Rows + Hover Preview Card (00:12 - 00:14 Reference) -->
		<div class="mt-12 divide-y divide-emerald-500/15 border-t border-b border-emerald-500/15">
			{#each experiences as exp (exp.id)}
				{@const isHovered = hoveredId === exp.id}
				<div
					role="listitem"
					onmouseenter={() => (hoveredId = exp.id)}
					class="group relative grid grid-cols-1 items-center gap-6 py-7 sm:py-9 px-3 sm:px-6 transition duration-300 lg:grid-cols-12 {isHovered
						? 'bg-emerald-950/35 rounded-2xl'
						: 'hover:bg-emerald-950/20'}"
				>
					<!-- Left: Organization, Role & Summary (00:12 Reference) -->
					<div class="lg:col-span-6">
						<div class="mb-2 flex items-center gap-2.5">
							<span
								class="font-mono-code inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-semibold text-emerald-300"
							>
								{#if exp.type === 'Pendidikan'}
									<GraduationCap class="h-3.5 w-3.5" />
								{:else if exp.type === 'Sertifikasi'}
									<Award class="h-3.5 w-3.5" />
								{:else}
									<Briefcase class="h-3.5 w-3.5" />
								{/if}
								<span>{exp.badge}</span>
							</span>
						</div>

						<h3
							class="font-display text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors"
						>
							{exp.organization}
						</h3>
						<p class="mt-1 text-sm sm:text-base font-medium text-zinc-300">
							{exp.role}
						</p>
						<p class="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-zinc-400">
							{exp.summary}
						</p>
					</div>

					<!-- Middle: Floating Tilted Preview Card on Active/Hover (00:14 Reference) -->
					<div class="lg:col-span-3 flex justify-start lg:justify-center">
						<div
							class="w-full max-w-[240px] rounded-xl border border-emerald-400/40 bg-zinc-950 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-300 {isHovered
								? 'opacity-100 rotate-2 scale-100'
								: 'opacity-65 lg:opacity-0 -rotate-2 scale-95 pointer-events-none'}"
						>
							<img
								src={exp.previewImage}
								alt={exp.organization}
								fetchpriority="low"
								loading="lazy"
								width="240"
								height="140"
								class="h-28 w-full rounded-lg object-cover"
							/>
						</div>
					</div>

					<!-- Right: Period & Credential Link (00:13 Reference) -->
					<div class="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4">
						<span class="font-mono-code text-sm sm:text-base font-medium text-zinc-300">
							{exp.period}
						</span>
						{#if exp.credentialUrl}
							<a
								href={exp.credentialUrl}
								class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/60 text-emerald-300 transition hover:bg-emerald-500 hover:text-zinc-950"
								title="Lihat Kredensial"
							>
								<ArrowUpRight class="h-4 w-4" />
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
