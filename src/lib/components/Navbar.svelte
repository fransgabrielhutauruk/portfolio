<script lang="ts">
	import { onMount } from 'svelte';
	import { Menu, X } from 'lucide-svelte';

	type SectionId = 'hero' | 'work' | 'capabilities' | 'experience' | 'contact';

	const navItems: { id: SectionId; label: string; href: string }[] = [
		{ id: 'work', label: 'Work', href: '#work' },
		{ id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
		{ id: 'experience', label: 'Experience', href: '#experience' },
		{ id: 'contact', label: 'Contact', href: '#contact' }
	];

	let activeSection = $state<SectionId>('hero');
	let mobileMenuOpen = $state(false);

	function scrollToSection(event: MouseEvent, id: SectionId) {
		event.preventDefault();
		mobileMenuOpen = false;
		activeSection = id;

		if (id === 'hero') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			history.replaceState(null, '', '#hero');
			return;
		}

		const target = document.getElementById(id);
		if (!target) return;

		// Because slides use position: sticky, calculate true document offset by summing preceding slides' heights
		const allSlides: SectionId[] = ['hero', 'work', 'capabilities', 'experience', 'contact'];
		const targetIndex = allSlides.indexOf(id);
		let topOffset = 0;

		for (let i = 0; i < targetIndex; i++) {
			const el = document.getElementById(allSlides[i]);
			if (el) {
				topOffset += el.offsetHeight;
			}
		}

		window.scrollTo({ top: topOffset, behavior: 'smooth' });
		history.replaceState(null, '', `#${id}`);
	}

	onMount(() => {
		const orderedIds: SectionId[] = ['hero', 'work', 'capabilities', 'experience', 'contact'];

		const updateActiveSection = () => {
			const triggerLine = window.innerHeight * 0.38;
			let current: SectionId = 'hero';

			// In a sticky-curtain stack, later slides slide UP over earlier slides.
			// The last slide whose top edge has crossed above the trigger line is the active slide.
			for (const id of orderedIds) {
				const el = document.getElementById(id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top <= triggerLine) {
					current = id;
				}
			}

			activeSection = current;
		};

		updateActiveSection();
		window.addEventListener('scroll', updateActiveSection, { passive: true });
		window.addEventListener('resize', updateActiveSection, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateActiveSection);
			window.removeEventListener('resize', updateActiveSection);
		};
	});
</script>

<header class="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center px-4 pt-4 sm:px-8 sm:pt-6 pointer-events-none">
	<!-- Centered Floating Pill Navbar -->
	<div
		class="pointer-events-auto flex w-full max-w-[360px] md:w-auto md:max-w-none items-center justify-between md:justify-center gap-2 md:gap-5 rounded-full border border-white/10 bg-zinc-950/80 px-4 py-2 md:px-5 md:py-2 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.65)] transition-all duration-300"
	>
		<!-- Brand "Frans." -> Kembali ke Hero Section -->
		<a
			href="#hero"
			onclick={(e) => scrollToSection(e, 'hero')}
			aria-current={activeSection === 'hero' ? 'page' : undefined}
			class="font-display group relative inline-flex items-center rounded-full px-2.5 py-1 text-lg sm:text-xl font-extrabold tracking-tight transition-colors duration-300 {activeSection ===
			'hero'
				? 'text-white'
				: 'text-zinc-200 hover:text-white'}"
		>
			<span>Frans</span><span
				class="text-emerald-400 transition-transform duration-300 group-hover:scale-125"
				>.</span
			>
		</a>

		<!-- Subtle Vertical Divider (Desktop) -->
		<span class="hidden md:block h-4 w-px bg-white/10" aria-hidden="true"></span>

		<!-- Desktop Navigation Links (Centered, Smooth Active Pill Indicator, No Superscript Counts) -->
		<nav class="hidden md:flex items-center gap-1 text-sm font-medium" aria-label="Navigasi Utama">
			{#each navItems as item}
				{@const isActive = activeSection === item.id}
				<a
					href={item.href}
					onclick={(e) => scrollToSection(e, item.id)}
					aria-current={isActive ? 'page' : undefined}
					class="relative rounded-full px-4 py-1.5 transition-all duration-300 ease-out {isActive
						? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
						: 'border border-transparent text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100'}"
				>
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>

		<!-- Mobile Burger Icon Button -->
		<button
			type="button"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-expanded={mobileMenuOpen}
			aria-controls="mobile-nav-menu"
			aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
			class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 cursor-pointer"
		>
			{#if mobileMenuOpen}
				<X class="h-4 w-4 text-emerald-400 transition-transform duration-200 rotate-90" />
			{:else}
				<Menu class="h-4 w-4 transition-transform duration-200" />
			{/if}
		</button>
	</div>

	<!-- Mobile Dropdown Menu (Smooth Animated Reveal) -->
	<div
		id="mobile-nav-menu"
		class="pointer-events-auto md:hidden mt-2 w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.75)] transition-all duration-300 ease-out origin-top {mobileMenuOpen
			? 'max-h-72 opacity-100 scale-100 py-2 px-2'
			: 'max-h-0 opacity-0 scale-95 py-0 px-2 border-transparent pointer-events-none'}"
	>
		<nav class="flex flex-col gap-1" aria-label="Navigasi Mobile">
			{#each navItems as item}
				{@const isActive = activeSection === item.id}
				<a
					href={item.href}
					onclick={(e) => scrollToSection(e, item.id)}
					aria-current={isActive ? 'page' : undefined}
					class="flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 {isActive
						? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
						: 'border border-transparent text-zinc-300 hover:bg-white/[0.05] hover:text-white'}"
				>
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>
	</div>
</header>
