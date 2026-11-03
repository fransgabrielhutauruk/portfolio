<script lang="ts">
	import { ArrowUpRight, Code2, X } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { capabilities } = portfolioData;

	// Default first row expanded
	let activeId = $state<string | null>(capabilities[0].id);

	function toggleRow(id: string) {
		activeId = activeId === id ? null : id;
	}
</script>

<section
	id="capabilities"
	class="scroll-slide-curtain z-50 min-h-screen rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/30 bg-[#09090b] px-4 pt-16 pb-28 sm:px-8 sm:pt-24 sm:pb-40"
>
	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="mx-auto mb-8 h-1.5 w-16 rounded-full bg-emerald-500/30"></div>

	<div class="mx-auto max-w-[1380px]">
		<!-- Section Header with Giant Watermark -->
		<div class="scroll-reveal-header relative py-4">
			<span
				aria-hidden="true"
				class="watermark-title block text-[clamp(3.4rem,10.5vw,9.2rem)] uppercase tracking-tighter"
			>
				CAPABILITIES
			</span>
			<div class="relative -mt-6 sm:-mt-12 flex flex-wrap items-end justify-between gap-4">
				<h2 class="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
					<span class="text-emerald-400">/</span>KEAHLIAN &amp; TECH STACK
				</h2>
				<p class="font-mono-code text-xs sm:text-sm text-zinc-400">
					Klik atau arahkan kursor pada baris keahlian
				</p>
			</div>
		</div>

		<!-- Full-Width Horizontal Interactive Rows -->
		<div role="list" class="mt-12 divide-y divide-white/10 border-t border-b border-white/10">
			{#each capabilities as item (item.id)}
				{@const isOpen = activeId === item.id}
				<div
					role="listitem"
					class="transition-all duration-300 {isOpen
						? 'my-3 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-[#0d1915] via-[#101c18] to-[#0c1317] px-5 py-7 sm:px-8 sm:py-9 shadow-[0_20px_60px_rgba(16,185,129,0.12)]'
						: 'py-6 sm:py-8 hover:bg-white/[0.02] px-2 sm:px-4'}"
					onmouseenter={() => (activeId = item.id)}
				>
					<button
						type="button"
						onclick={() => toggleRow(item.id)}
						aria-expanded={isOpen}
						class="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
					>
						<div class="flex flex-wrap items-baseline gap-3 sm:gap-5">
							<span class="font-mono-code text-xs sm:text-sm font-semibold text-emerald-400">
								/{item.code}
							</span>
							<h3
								class="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight transition-colors {isOpen
									? 'text-zinc-100'
									: 'text-zinc-300 hover:text-zinc-100'}"
							>
								{item.title}
							</h3>
						</div>

						<div class="flex items-center gap-3 shrink-0">
							<span
								class="flex h-10 w-10 items-center justify-center rounded-full border transition {isOpen
									? 'border-emerald-400/50 bg-emerald-500 text-zinc-950'
									: 'border-white/15 bg-zinc-900 text-zinc-300'}"
							>
								{#if isOpen}
									<X class="h-5 w-5" />
								{:else}
									<ArrowUpRight class="h-5 w-5" />
								{/if}
							</span>
						</div>
					</button>

					{#if isOpen}
						<!-- Expanded Content + Interactive Tech Stack Logo Badges (Without Preview Image) -->
						<div class="mt-6 border-t border-white/10 pt-6">
							<p class="max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-300">
								{item.description}
							</p>

							<!-- Skill Badges with Official Technology Logos -->
							<div class="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
								{#each item.skills as skill}
									<span
										class="group/skill inline-flex items-center gap-2.5 rounded-2xl border border-white/12 bg-zinc-950/85 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-100 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-zinc-900 hover:text-emerald-300"
									>
										{#if skill.logo}
											<img
												src={skill.logo}
												alt="Logo {skill.name}"
												loading="lazy"
												width="20"
												height="20"
												class="h-5 w-5 shrink-0 object-contain transition-transform duration-200 group-hover/skill:scale-110"
											/>
										{:else}
											<Code2 class="h-4 w-4 shrink-0 text-emerald-400" />
										{/if}
										<span>{skill.name}</span>
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
