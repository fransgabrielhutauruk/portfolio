<script lang="ts">
	import { ArrowUpRight, X } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { capabilities } = portfolioData;

	// Default first row expanded just like 00:10 in the Dymas Alfin reference video
	let activeId = $state<string | null>(capabilities[0].id);

	function toggleRow(id: string) {
		activeId = activeId === id ? null : id;
	}
</script>

<section
	id="capabilities"
	class="scroll-slide-curtain z-30 min-h-screen rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/30 bg-[#09090b] px-4 py-20 sm:px-8 sm:py-28"
>
	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="mx-auto mb-8 h-1.5 w-16 rounded-full bg-emerald-500/30"></div>

	<div class="mx-auto max-w-[1380px]">
		<!-- Section Header with Giant Watermark (00:08-00:09 Reference: SERVICE / CAPABILITIES) -->
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

		<!-- Full-Width Horizontal Interactive Rows (00:09 - 00:10 Reference) -->
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
						<div class="flex items-baseline gap-3 sm:gap-5">
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

						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition {isOpen
								? 'border-emerald-400/50 bg-emerald-500 text-zinc-950'
								: 'border-white/15 bg-zinc-900 text-zinc-300'}"
						>
							{#if isOpen}
								<X class="h-5 w-5" />
							{:else}
								<ArrowUpRight class="h-5 w-5" />
							{/if}
						</span>
					</button>

					{#if isOpen}
						<!-- Expanded Content + Tilted Floating Preview Card (00:10 Reference) -->
						<div class="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
							<div class="lg:col-span-7">
								<p class="max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-300">
									{item.description}
								</p>

								<!-- Skill Pills -->
								<div class="mt-5 flex flex-wrap gap-2">
									{#each item.skills as skill}
										<span
											class="rounded-full border border-emerald-500/30 bg-zinc-950/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-300"
										>
											{skill}
										</span>
									{/each}
								</div>
							</div>

							<!-- Tilted Floating Visual Card (00:10 Reference) -->
							<div class="lg:col-span-5 flex justify-start lg:justify-end">
								<div
									class="group relative w-full max-w-[340px] -rotate-2 rounded-2xl border border-emerald-400/40 bg-zinc-950 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.75)] transition duration-300 hover:rotate-0"
								>
									<div class="mb-2 flex items-center justify-between px-1">
										<span class="font-mono-code text-[11px] font-semibold text-emerald-400">
											{item.shortTitle}
										</span>
										<span
											class="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300"
										>
											{item.metricBadge}
										</span>
									</div>
									<!-- Initially hidden interaction image -> fetchpriority="low" per modern-web-guidance -->
									<img
										src={item.previewImage}
										alt={item.title}
										fetchpriority="low"
										loading="lazy"
										width="340"
										height="212"
										class="h-40 w-full rounded-xl object-cover border border-white/10"
									/>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
