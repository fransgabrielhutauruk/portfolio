<script lang="ts">
	import { ArrowUpRight, CheckCircle2, Code2, ExternalLink } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { projects, profile } = portfolioData;

	type FilterCategory = 'All' | 'Real Project' | 'Exploration';
	let activeFilter = $state<FilterCategory>('All');

	const filters: { label: string; value: FilterCategory }[] = [
		{ label: 'All', value: 'All' },
		{ label: 'Real Project', value: 'Real Project' },
		{ label: 'Exploration', value: 'Exploration' }
	];

	let filteredProjects = $derived(
		activeFilter === 'All'
			? projects
			: projects.filter((project) => project.category === activeFilter)
	);
</script>

<section
	id="work"
	class="scroll-slide-curtain z-20 min-h-screen rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/30 bg-[#11141b] px-4 py-20 sm:px-8 sm:py-28"
>
	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="mx-auto mb-8 h-1.5 w-16 rounded-full bg-emerald-500/30"></div>

	<div class="mx-auto max-w-[1380px]">
		<!-- Section Header with Giant Watermark (00:05 Reference: PORTFOLIO behind /SELECTED WORK) -->
		<div class="scroll-reveal-header relative flex flex-col items-center justify-center py-6 text-center">
			<span
				aria-hidden="true"
				class="watermark-title text-[clamp(3.8rem,12vw,10.5rem)] uppercase tracking-tighter"
			>
				PORTFOLIO
			</span>
			<h2
				class="font-display relative -mt-8 sm:-mt-14 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100"
			>
				<span class="text-emerald-400">/</span>SELECTED WORK
			</h2>
			<p class="mt-3 max-w-xl text-sm sm:text-base text-zinc-400">
				Pilihan proyek aplikasi web Full-Stack berbasis ekosistem Laravel, arsitektur database relasional,
				dan antarmuka modern.
			</p>
		</div>

		<!-- Filter Bar & Right Action Button (00:06 Reference) -->
		<div
			class="mt-8 mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5"
		>
			<div class="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter Kategori Proyek">
				{#each filters as filter}
					<button
						type="button"
						role="tab"
						aria-selected={activeFilter === filter.value}
						onclick={() => (activeFilter = filter.value)}
						class="cursor-pointer rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition {activeFilter ===
						filter.value
							? 'bg-emerald-500 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)]'
							: 'border border-white/10 bg-zinc-900/70 text-zinc-400 hover:border-white/20 hover:text-zinc-200'}"
					>
						{filter.label}
					</button>
				{/each}
			</div>

			<a
				href={profile.socials[0].href}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-zinc-900/80 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-200 transition hover:border-emerald-500/50 hover:text-emerald-300"
			>
				<span>View All on GitHub</span>
				<ArrowUpRight class="h-4 w-4 text-emerald-400" />
			</a>
		</div>

		<!-- 2-Column Project Grid (00:06 - 00:07 Reference, Direct Links without Subpage Drawer) -->
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			{#each filteredProjects as project (project.id)}
				<article
					class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0b0e13] p-4 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/45 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]"
				>
					<div>
						<!-- Top Image Mockup Container with Category Pill -->
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="relative block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 aspect-[16/10]"
						>
							<span
								class="font-mono-code absolute top-3.5 left-3.5 z-10 rounded-full border border-emerald-500/35 bg-zinc-950/85 px-3 py-1 text-[11px] font-semibold tracking-wider text-emerald-300 backdrop-blur-md"
							>
								{project.badgeLabel}
							</span>

							<span
								class="font-mono-code absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-zinc-950/80 text-zinc-200 backdrop-blur-md transition group-hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950"
							>
								<ArrowUpRight class="h-4 w-4" />
							</span>

							<!-- Below-the-fold project image -> loading="lazy" ALONE per modern-web-guidance -->
							<img
								src={project.image}
								alt={project.title}
								loading="lazy"
								width="960"
								height="600"
								class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
							/>
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
							<ul class="mt-4 space-y-1.5 border-t border-white/10 pt-4">
								{#each project.highlights as point}
									<li class="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
										<CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
										<span>{point}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Bottom Pill Tags & Direct External Links -->
					<div class="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
						<div class="flex flex-wrap gap-1.5">
							{#each project.tags as tag}
								<span
									class="rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300"
								>
									{tag}
								</span>
							{/each}
						</div>

						<div class="flex items-center gap-2">
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-emerald-500/50 hover:text-emerald-300"
							>
								<Code2 class="h-3.5 w-3.5 text-emerald-400" />
								<span>GitHub</span>
							</a>
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-400"
							>
								<span>Live Demo</span>
								<ExternalLink class="h-3.5 w-3.5" />
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
