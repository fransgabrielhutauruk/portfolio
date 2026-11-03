<script lang="ts">
	import { Award, Code2, Globe2, GraduationCap, MapPin } from 'lucide-svelte';
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
						<span>{profile.location}</span>
					</span>
				</div>
			</div>
		</div>

		<!-- Balanced 12-Column Editorial Bento Grid (3 Clean Cards: Narrative Left | Education + Languages Right) -->
		<div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
			<!-- Left Column (7 Cols): Personal Identity & Software Engineering Narrative -->
			<div
				class="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#090c0e]/90 p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:col-span-7"
			>
				<div>
					<div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
						<div>
							<p class="font-mono-code text-xs uppercase tracking-widest text-emerald-400">
								/ PROFIL SINGKAT
							</p>
							<h3 class="font-display mt-1 text-2xl sm:text-3xl font-bold text-zinc-100">
								{profile.fullName}
							</h3>
						</div>
					</div>

					<div class="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300">
						<p>{about.leadParagraph}</p>
						<p>{about.bodyParagraph}</p>
					</div>
				</div>

				<!-- Subtle Bottom Focus Tags -->
				<div class="mt-8 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
					{#each ['Problem Solving', 'Team Work', 'Fast Learner', 'Quick Adaptation', 'Critical Thinking'] as tag}
						<span
							class="font-mono-code rounded-full border border-white/10 bg-zinc-900/80 px-3.5 py-1 text-xs text-zinc-300 transition hover:border-emerald-500/35 hover:text-emerald-300"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>

			<!-- Right Column (5 Cols): Academic Spotlight (Top) + Languages & Communication (Bottom) -->
			<div class="flex flex-col justify-between gap-6 lg:col-span-5">
				<!-- Academic Spotlight Card -->
				<div
					class="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-[#0e1f1a] via-[#0b1613] to-[#090d0e] p-6 sm:p-7 shadow-[0_20px_50px_rgba(16,185,129,0.12)]"
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
								class="font-display mt-3.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white"
							>
								{about.education.institution}
							</h3>
							<p class="mt-1.5 text-xs sm:text-sm font-medium text-emerald-200/90">
								{about.education.degree}
							</p>
							<p class="mt-0.5 text-xs sm:text-sm text-zinc-400">
								{about.education.major}
							</p>
						</div>

						<!-- GPA Metric Badge -->
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
						</div>
					</div>

					<!-- Scholarship & Honors Highlight (Clean Inline Style Without Nested Card) -->
					<div class="mt-5 border-t border-emerald-500/20 pt-4">
						<div class="flex flex-wrap items-center justify-between gap-2">
							<div class="inline-flex items-center gap-2">
								<Award class="h-4 w-4 shrink-0 text-emerald-400" />
								<span class="font-display text-xs sm:text-sm font-semibold text-emerald-200">
									{about.education.scholarship.title}
								</span>
							</div>
							<span class="font-mono-code text-[11px] font-semibold text-emerald-400">
								• {about.education.scholarship.period}
							</span>
						</div>
						<p class="mt-1 pl-6 text-xs leading-relaxed text-zinc-400">
							{about.education.scholarship.description}
						</p>
					</div>

					<div
						class="mt-4 flex items-center justify-between border-t border-emerald-500/15 pt-3 text-xs text-emerald-300/90"
					>
						<span class="font-mono-code text-[11px] font-medium uppercase tracking-wider text-emerald-300/80">
							{about.education.honors}
						</span>
					</div>
				</div>

				<!-- Languages Card (Bahasa Indonesia: Native | English: Intermediate) -->
				<div
					class="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#090c0e]/90 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
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
								<div class="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
									<div
										class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300"
										style="width: {lang.proficiencyPercent}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hidden sm:block"></div>
</section>
