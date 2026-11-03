<script lang="ts">
	import { ArrowUpRight, Briefcase, Building2, Calendar, CheckCircle2, Globe, MapPin } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { experiences } = portfolioData;
</script>

<section
	id="experience"
	aria-label="Pengalaman Profesional & Magang"
	class="scroll-slide-curtain z-30 min-h-screen rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/35 bg-[#07120e] px-4 pt-16 pb-28 sm:px-8 sm:pt-24 sm:pb-40"
>
	<!-- Subtle Emerald Ambient Glow -->
	<div
		class="pointer-events-none absolute inset-0 rounded-t-[2.25rem] sm:rounded-t-[3rem] bg-[radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.08),transparent_55%)]"
	></div>

	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="relative z-10 mx-auto mb-6 h-1.5 w-16 rounded-full bg-emerald-400/35"></div>

	<div class="relative z-10 mx-auto max-w-[1380px]">
		<!-- Section Header with Giant Watermark -->
		<div class="scroll-reveal-header relative py-3">
			<span
				aria-hidden="true"
				class="watermark-title block text-[clamp(3.2rem,10vw,8.8rem)] uppercase tracking-tighter"
			>
				EXPERIENCE
			</span>
			<div class="relative -mt-6 sm:-mt-12 flex flex-wrap items-end justify-between gap-4">
				<div>
					<h2
						class="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100"
					>
						<span class="text-emerald-400">/</span>EXPERIENCE
					</h2>
					<p class="mt-2 max-w-xl text-sm sm:text-base text-zinc-400">
						Perjalanan profesional dalam merancang sistem, menulis kode, dan berkolaborasi di lingkungan industri.
					</p>
				</div>

			</div>
		</div>

		<!-- Left-Rail Vertical Timeline (Reference Images 1, 3, & 5) -->
		<div class="relative mt-12">
			{#each experiences as exp, index (exp.id)}
				{@const isLast = index === experiences.length - 1}
				<div class="group relative grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8 {isLast ? '' : 'pb-10 sm:pb-12'}">
					<!-- Desktop Left Date & Location Rail (3 Cols) -->
					<div class="hidden lg:flex lg:col-span-3 flex-col items-end pr-8 pt-1.5 text-right">
						<span
							class="font-mono-code text-sm font-semibold tracking-wider text-emerald-400"
						>
							{exp.period}
						</span>
						<span class="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400">
							<MapPin class="h-3.5 w-3.5 text-emerald-500/80" />
							<span>{exp.location} • {exp.workMode}</span>
						</span>
					</div>

					<!-- Right Content Column with Vertical Timeline Spine & Node (9 Cols) -->
					<div class="relative pl-7 sm:pl-9 lg:col-span-9 lg:pl-10">
						<!-- Vertical Continuous Timeline Line (Connected seamlessly across all items) -->
						<div
							aria-hidden="true"
							class="absolute left-[7px] w-[2px] {index === 0 ? 'top-3' : 'top-0'} {isLast
								? 'bottom-0 bg-gradient-to-b from-emerald-400/50 via-emerald-500/35 to-transparent'
								: '-bottom-12 bg-emerald-400/50'}"
						></div>

						<!-- Glowing Timeline Dot Node -->
						<div
							aria-hidden="true"
							class="absolute top-2.5 left-0 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-400 bg-[#07120e] shadow-[0_0_14px_rgba(16,185,129,0.75)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-emerald-400"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:bg-zinc-950"></span>
						</div>

						<!-- Experience Card -->
						<article
							class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090d0c]/95 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition duration-300 group-hover:border-emerald-500/45 group-hover:shadow-[0_20px_55px_rgba(16,185,129,0.1)]"
						>
							<!-- Card Top Header: Role, Organization & Mobile Period/Location Pills -->
							<div class="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
								<div>
									<h3
										class="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-300 transition-colors"
									>
										{exp.role}
									</h3>

									<div class="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm">
										<span class="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
											<Building2 class="h-4 w-4 shrink-0" />
											<span>{exp.organization}</span>
										</span>
										{#if exp.departmentOrProgram}
											<span class="text-zinc-600">•</span>
											<span class="text-zinc-300">{exp.departmentOrProgram}</span>
										{/if}
									</div>
								</div>

								<!-- Right Header Actions: Live Link & Mobile Period/Location Badge -->
								<div class="flex flex-wrap items-center gap-2">
									{#if exp.liveUrl}
										<a
											href={exp.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="font-mono-code group/link inline-flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500 hover:text-zinc-950"
										>
											<Globe class="h-3.5 w-3.5" />
											<span>{exp.liveLabel ?? exp.liveUrl}</span>
											<ArrowUpRight
												class="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
											/>
										</a>
									{/if}

									<div class="flex flex-wrap items-center gap-2 lg:hidden">
										<span
											class="font-mono-code inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300"
										>
											<Calendar class="h-3.5 w-3.5" />
											<span>{exp.period}</span>
										</span>
										<span
											class="font-mono-code inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300"
										>
											<MapPin class="h-3.5 w-3.5 text-emerald-400" />
											<span>{exp.location} • {exp.workMode}</span>
										</span>
									</div>
								</div>
							</div>

							<!-- Role Overview Description -->
							<p class="mt-5 text-sm sm:text-[15px] leading-relaxed text-zinc-300">
								{exp.description}
							</p>

							<!-- Key Responsibilities List -->
							<div class="mt-5">
								<p
									class="font-mono-code mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400"
								>
									Responsibilities &amp; Key Contributions
								</p>
								<ul class="space-y-2.5">
									{#each exp.responsibilities as item}
										<li class="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-zinc-300/90">
											<CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
											<span>{item}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Bottom Tech Stack / Technology Pills -->
							<div class="mt-6 border-t border-white/10 pt-4">
								<div class="flex flex-wrap items-center gap-2">
									{#each exp.technologies as tech}
										<span
											class="font-mono-code rounded-full border border-emerald-500/25 bg-emerald-950/35 px-3 py-1 text-xs font-medium text-emerald-300 transition group-hover:border-emerald-500/40"
										>
											{tech}
										</span>
									{/each}
								</div>
							</div>
						</article>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
