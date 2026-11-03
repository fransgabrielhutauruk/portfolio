<script lang="ts">
	import { ArrowUpRight, FileDown, Github, Linkedin, MessageCircle } from 'lucide-svelte';
	import { portfolioData } from '$lib/data/portfolio';

	const { profile } = portfolioData;
	let portraitHovered = $state(false);
	let spotlightX = $state(50);
	let spotlightY = $state(28);

	function handleHeroMouseMove(event: MouseEvent) {
		const section = event.currentTarget as HTMLElement;
		const rect = section.getBoundingClientRect();
		if (!rect.width || !rect.height) return;
		spotlightX = Math.round(((event.clientX - rect.left) / rect.width) * 100);
		spotlightY = Math.round(((event.clientY - rect.top) / rect.height) * 100);
	}

	function scrollToContact(event: MouseEvent) {
		event.preventDefault();
		const allSlides = ['hero', 'about', 'experience', 'work', 'capabilities'];
		let topOffset = 0;

		for (const id of allSlides) {
			const el = document.getElementById(id);
			if (el) {
				topOffset += el.offsetHeight;
			}
		}

		window.scrollTo({ top: topOffset, behavior: 'smooth' });
		history.replaceState(null, '', '#contact');
	}
</script>

<section
	id="hero"
	aria-label="Perkenalan Utama"
	onmousemove={handleHeroMouseMove}
	style="--spot-x: {spotlightX}%; --spot-y: {spotlightY}%;"
	class="sticky top-0 z-10 flex min-h-screen flex-col justify-between overflow-hidden bg-[#09090b] pt-24 pb-24 sm:pt-28 sm:pb-36"
>
	<!-- Animated Emerald Studio Ambient Backlight + Interactive Cursor Spotlight -->
	<div
		class="animate-ambient-breathe pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(16,185,129,0.14),transparent_60%)]"
	></div>
	<div
		class="pointer-events-none absolute inset-0 transition-opacity duration-500 bg-[radial-gradient(560px_circle_at_var(--spot-x)_var(--spot-y),rgba(16,185,129,0.09),transparent_70%)]"
	></div>
	<div
		class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_60%,transparent_100%)]"
	></div>

	<div class="relative mx-auto flex w-full max-w-[1380px] flex-1 flex-col px-4 sm:px-8">
		<!-- Top Giant Display Typography (Synchronized Outline Glow & Shimmer Sweep) -->
		<div
			class="animate-hero-enter relative z-10 mt-2 sm:mt-6 text-center select-none"
			style="--delay: 40ms;"
		>
			<h1
				class="font-display flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 text-[clamp(3.75rem,13.2vw,11.8rem)] font-extrabold tracking-[-0.045em] leading-[0.88]"
			>
				<span class="text-outline-hero {portraitHovered ? 'is-energized' : ''}">
					{profile.firstNameOutline}
				</span>
				<span class="text-shimmer-hero">{profile.lastNameSolid}</span>
			</h1>
		</div>

		<!-- Main 3-Column Editorial Stage (Left Bio & CTA | Center Cutout Portrait | Right Social Pill Stack) -->
		<div class="relative z-20 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
			<!-- Bottom Left: Role, Bio & Primary CTA -->
			<div
				class="animate-hero-enter order-2 lg:order-1 lg:col-span-4 lg:pb-6"
				style="--delay: 200ms;"
			>
				<h2
					class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 transition-colors duration-500 {portraitHovered
						? 'text-emerald-300'
						: 'text-zinc-100'}"
				>
					{profile.role}
				</h2>

				<p class="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-zinc-400">
					{profile.bioShort}
				</p>

				<div class="mt-6 flex flex-wrap items-center gap-3">
					<a
						href="#contact"
						onclick={scrollToContact}
						class="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_32px_rgba(16,185,129,0.45)]"
					>
						<span>Let's Connect</span>
						<ArrowUpRight
							class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>
			</div>

			<!-- Center Bottom: Interactive Cutout Portrait Overlapping Giant Typography -->
			<div
				class="animate-hero-enter order-1 lg:order-2 lg:col-span-4 flex flex-col items-center justify-end -mt-14 sm:-mt-20 lg:-mt-32"
				style="--delay: 120ms;"
				role="presentation"
				onmouseenter={() => (portraitHovered = true)}
				onmouseleave={() => (portraitHovered = false)}
			>
				<div class="group relative flex justify-center">
					<!-- Emerald Glow Ring Behind Portrait -->
					<div
						class="pointer-events-none absolute -inset-6 rounded-full bg-emerald-500/25 blur-3xl transition-all duration-700 {portraitHovered
							? 'opacity-100 scale-105'
							: 'opacity-45 scale-95'}"
					></div>

					<!-- Floating Status Badge Right (Gentle Floating Levitation) -->
					<div
						class="animate-badge-float font-mono-code absolute bottom-16 -right-2 sm:-right-6 z-30 inline-flex items-center gap-2 rounded-full border bg-zinc-900/90 px-3.5 py-1 text-[11px] font-medium text-zinc-200 shadow-lg backdrop-blur-md transition-colors duration-500 {portraitHovered
							? 'border-emerald-400/50 text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.25)]'
							: 'border-white/15'}"
					>
						<span>Available for Full-Time &amp; Projects</span>
					</div>

					<!-- Portrait Cutout Image (LCP Candidate -> fetchpriority="high" per modern-web-guidance) -->
					<img
						src={profile.avatarCutout}
						alt="Potret {profile.fullName} — {profile.role}"
						fetchpriority="high"
						width="540"
						height="540"
						class="portrait-cutout-mask relative z-20 h-[360px] sm:h-[460px] lg:h-[540px] w-auto object-cover object-top transition-all duration-500 select-none {portraitHovered
							? 'grayscale-0 scale-[1.02] drop-shadow-[0_12px_45px_rgba(16,185,129,0.32)]'
							: 'grayscale contrast-110'}"
					/>
				</div>
			</div>

			<!-- Bottom Right: Vertical Stack of Social Pill Buttons -->
			<div
				class="animate-hero-enter order-3 lg:col-span-4 flex flex-col items-start lg:items-end lg:pb-6"
				style="--delay: 280ms;"
			>
				<p class="font-mono-code mb-3 text-xs uppercase tracking-widest text-zinc-500">
					/ KONEKSI LANGSUNG
				</p>
				<div class="flex flex-wrap lg:flex-col gap-2.5 w-full sm:w-auto lg:w-52">
					{#each profile.socials as social}
						{@const isExternal = social.href.startsWith('http')}
						<a
							href={social.href}
							download={!isExternal ? '' : undefined}
							target={isExternal ? '_blank' : undefined}
							rel={isExternal ? 'noopener noreferrer' : undefined}
							class="group flex items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-900/75 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:-translate-x-0.5 hover:border-emerald-500/50 hover:bg-emerald-950/40 hover:text-zinc-100"
						>
							<span class="flex items-center gap-2.5">
								{#if social.label === 'GitHub'}
									<Github class="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
								{:else if social.label === 'LinkedIn'}
									<Linkedin class="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
								{:else if social.label === 'WhatsApp'}
									<MessageCircle class="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
								{:else}
									<FileDown class="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:translate-y-0.5" />
								{/if}
								<span>{social.label}</span>
							</span>
							{#if isExternal}
								<ArrowUpRight
									class="h-3.5 w-3.5 text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400"
								/>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
