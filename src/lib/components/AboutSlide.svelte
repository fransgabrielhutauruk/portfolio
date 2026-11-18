<script lang="ts">
	import { Award, BookOpen, Code2, Globe2, GraduationCap, MapPin } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { profile, about } = portfolioData;
</script>

<section
	id="about"
	aria-label="Tentang {profile.fullName}"
	class="scroll-slide-curtain z-20 flex min-h-screen flex-col rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/35 bg-[#0c1110] px-4 pt-16 pb-28 sm:px-8 sm:pt-24 sm:pb-40"
>
	<!-- Subtle Emerald Ambient Glow -->
	<div
		class="pointer-events-none absolute inset-0 rounded-t-[2.25rem] sm:rounded-t-[3rem] bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.09),transparent_55%)]"
	></div>

	<!-- Top Curtain Pull-Bar Indicator -->
	<div class="relative z-10 mx-auto mb-6 h-1.5 w-16 rounded-full bg-emerald-500/35"></div>

	<div class="relative z-10 mx-auto my-auto w-full max-w-[1380px]">
		<!-- Compact Section Header with Giant Watermark -->
		<div class="scroll-reveal-header relative py-2">
			<span
				aria-hidden="true"
				class="watermark-title block text-[clamp(3.2rem,9.5vw,8.2rem)] uppercase tracking-tighter"
			>
				ABOUT
			</span>
			<div class="relative -mt-6 sm:-mt-11 flex flex-wrap items-end justify-between gap-4">
				<div>
					<h2
						class="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100"
					>
						<span class="text-emerald-400">/</span>ABOUT
					</h2>
				</div>

				<div class="flex flex-wrap items-center gap-2">
					<span
						class="font-mono-code inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-medium text-emerald-300"
					>
						<MapPin class="h-3.5 w-3.5 text-emerald-400" />
						<span>{profile.location} • Open to Relocate</span>
					</span>
				</div>
			</div>
		</div>

		<!-- Balanced 12-Column Editorial Bento Grid (3 Clean Cards: Narrative Left | Education + Languages Right) -->
		<div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
			<!-- Left Column (7 Cols): Personal Identity & Software Engineering Narrative -->
			<div
				class="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090c0e]/90 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:col-span-7"
			>
				<div>
					<div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
						<div>
							<p class="font-mono-code text-xs uppercase tracking-widest text-emerald-400">
								/ PROFIL SINGKAT
							</p>
							<h3 class="font-display mt-1 text-2xl sm:text-3xl font-bold text-zinc-100">
								{profile.fullName}
							</h3>
						</div>
					</div>

					<div class="mt-5 space-y-3.5 text-sm sm:text-[15.5px] leading-relaxed text-zinc-300">
						<p>{about.leadParagraph}</p>
						<p>{about.bodyParagraph}</p>
						<p>{about.closeParagraph}</p>
					</div>
				</div>

				<!-- Subtle Bottom Focus Tags -->
				<div class="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
					{#each ['Full-Stack', 'System Design', 'Business Process', 'Maintainable Code', 'Collaboration'] as tag}
						<span
							class="font-mono-code rounded-full border border-white/10 bg-zinc-900/80 px-3.5 py-1 text-xs text-zinc-300 transition hover:border-emerald-500/35 hover:text-emerald-300"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>

			<!-- Right Column (5 Cols): Academic Spotlight (Top) + Languages & Communication (Bottom) -->
			<div class="flex flex-col gap-5 lg:col-span-5">
				<!-- Academic Spotlight Card (Compact Natural Flow, No Stretched Empty Gap) -->
				<div
					class="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-[#0e1f1a] via-[#0b1613] to-[#090d0e] p-6 sm:p-7 shadow-[0_20px_50px_rgba(16,185,129,0.12)]"
				>
					<div class="flex items-start justify-between gap-4">
						<div>
							<span
								class="font-mono-code inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-300"
							>
								<GraduationCap class="h-3.5 w-3.5" />
								<span>EDUCATION • {about.education.period}</span>
							</span>
							<h3
								class="font-display mt-3 text-xl sm:text-2xl font-extrabold tracking-tight text-white"
							>
								{about.education.institution}
							</h3>
							<p class="mt-1.5 text-xs sm:text-sm font-medium text-emerald-200/90">
								{about.education.degree}
							</p>
							<p class="mt-0.5 text-xs sm:text-sm font-medium text-[#D4D4D8]">
								{about.education.major}
							</p>
						</div>

						<!-- GPA Metric Badge with Cum Laude Predicate -->
						<div
							class="shrink-0 rounded-2xl border border-emerald-400/40 bg-zinc-950/80 px-4 py-3 text-center backdrop-blur-md"
						>
							<span class="font-mono-code block text-[10px] uppercase tracking-wider text-zinc-400">
								IPK / CGPA
							</span>
							<div class="font-display mt-0.5 flex items-baseline justify-center gap-0.5">
								<span class="text-2xl sm:text-3xl font-extrabold text-emerald-400">
									{about.education.gpa}
								</span>
								<span class="text-xs font-semibold text-zinc-500">
									/{about.education.gpaScale}
								</span>
							</div>
							<span
								class="font-mono-code mt-1.5 inline-block rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300"
							>
								{about.education.honors}
							</span>
						</div>
					</div>

					<!-- Scholarship Highlight Footer -->
					<div class="mt-5 border-t border-emerald-500/20 pt-4">
						<div class="inline-flex items-center gap-2">
							<Award class="h-4 w-4 shrink-0 text-emerald-400" />
							<span class="font-display text-xs sm:text-sm font-semibold text-emerald-200">
								{about.education.scholarship.title}
							</span>
						</div>
					</div>
				</div>

				<!-- Languages Card (Bahasa Indonesia: Native | English: Intermediate) -->
				<div
					class="flex flex-1 flex-col justify-center rounded-3xl border border-white/10 bg-[#090c0e]/90 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
				>
					<div class="mb-4 flex items-center justify-between">
						<div class="flex items-center gap-2">
							<Globe2 class="h-4 w-4 text-emerald-400" />
							<span class="font-mono-code text-xs font-semibold uppercase tracking-wider text-zinc-300">
								Languages &amp; Communication
							</span>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
						{#each about.languages as lang}
							<div
								class="rounded-2xl border border-white/8 bg-zinc-900/60 px-4 py-3.5 transition hover:border-emerald-500/35"
							>
								<div class="flex items-center justify-between gap-2">
									<span class="font-display text-sm sm:text-base font-bold text-zinc-100">
										{lang.name}
									</span>
									<span
										class="font-mono-code rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300"
									>
										{lang.code}
									</span>
								</div>
								<p class="mt-1 text-xs text-zinc-400">{lang.level}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Bottom Row (12 Cols): Core Readings & Engineering Principles (Single-Row Infinite Marquee) -->
			<div
				class="overflow-hidden rounded-3xl border border-white/10 bg-[#090c0e]/90 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] lg:col-span-12"
			>
				<div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
					<div class="flex items-center gap-2">
						<BookOpen class="h-4 w-4 text-emerald-400" />
						<span class="font-mono-code text-xs font-semibold uppercase tracking-wider text-emerald-400">
							/ READINGS &amp; ENGINEERING REFERENCES
						</span>
					</div>
				</div>

				<!-- 1-Row Infinite Marquee Viewport with Left/Right Fade Mask & Pause on Hover -->
				<div class="readings-marquee-group marquee-edge-fade relative mt-4 overflow-hidden">
					<div class="animate-readings-marquee flex w-max">
						{#each [0, 1] as copyIdx}
							<div
								class="flex shrink-0 items-stretch gap-3.5 pr-3.5"
								aria-hidden={copyIdx === 1 ? 'true' : undefined}
							>
								{#each about.coreReadings as book (`${copyIdx}-${book.id}`)}
									<div
										class="group flex w-[290px] sm:w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-white/8 bg-zinc-900/55 px-4 py-3.5 transition-colors duration-200 hover:border-emerald-500/40 hover:bg-zinc-900/90"
									>
										<div>
											<div class="flex items-center justify-between gap-2">
												<span class="font-mono-code text-[11px] font-medium text-emerald-400/90">
													{book.focusTag}
												</span>
												{#if book.status}
													<span
														class="font-mono-code inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300"
													>
														<span>{book.status}</span>
													</span>
												{/if}
											</div>

											<h4
												class="font-display mt-1.5 text-sm sm:text-[15px] font-bold leading-snug text-zinc-100 transition-colors group-hover:text-emerald-300"
											>
												{book.title}
											</h4>
										</div>

										<p class="mt-2 text-xs text-zinc-400">
											{book.author}
										</p>
									</div>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
