<script lang="ts">
  import {
    ArrowUp,
    ArrowUpRight,
    Check,
    Copy,
    FileDown,
    Github,
    Linkedin,
    MessageCircle,
  } from "lucide-svelte";
  import { portfolioData } from "$lib/data/portfolio";

  const { profile } = portfolioData;

  let copied = $state(false);

  function getWibTime(): string {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  }

  let currentWibTime = $state(getWibTime());

  $effect(() => {
    currentWibTime = getWibTime();
    const interval = setInterval(() => {
      currentWibTime = getWibTime();
    }, 15000);
    return () => clearInterval(interval);
  });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<footer
  id="contact"
  class="scroll-slide-curtain z-60 flex min-h-screen flex-col justify-between overflow-hidden rounded-t-[2.25rem] sm:rounded-t-[3rem] border-t border-emerald-500/35 bg-[#0d1016] pt-16 pb-6 sm:pt-24"
>
  <!-- Ambient Emerald Glow -->
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.14),transparent_65%)]"
  ></div>

  <!-- Top Curtain Pull-Bar Indicator -->
  <div
    class="relative z-10 mx-auto h-1.5 w-16 rounded-full bg-emerald-500/35"
  ></div>

  <!-- Center CTA Content (00:15 - 00:16 Reference: HAVE A PROJECT IN MIND?) -->
  <div
    class="relative z-10 mx-auto my-auto flex max-w-4xl flex-col items-center px-4 py-14 text-center sm:px-8"
  >
    <h2
      class="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100"
    >
      TERTARIK <span class="text-emerald-400">BERKOLABORASI?</span>
    </h2>

    <p class="mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed text-zinc-400">
      Saya terbuka untuk kesempatan kerja <strong class="text-zinc-200"
        >Full-Time</strong
      > ( Full-Stack / Backend / Frontend Developer).
    </p>

    <!-- Primary Direct Action Buttons for Indonesian Recruiters & Clients -->
    <div class="mt-9 flex flex-wrap items-center justify-center gap-3.5">
      <a
        href={profile.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-sm sm:text-base font-bold text-zinc-950 transition hover:bg-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.45)]"
      >
        <MessageCircle class="h-5 w-5" />
        <span>Chat WhatsApp</span>
        <ArrowUpRight
          class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>

      <button
        type="button"
        onclick={copyEmail}
        class="cursor-pointer inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-zinc-900/90 px-6 py-3.5 text-sm sm:text-base font-semibold text-zinc-100 transition hover:border-emerald-500/50 hover:bg-emerald-950/40"
      >
        {#if copied}
          <Check class="h-4 w-4 text-emerald-400" />
          <span class="text-emerald-300">Email Disalin ({profile.email})</span>
        {:else}
          <Copy class="h-4 w-4 text-emerald-400" />
          <span>{profile.email}</span>
        {/if}
      </button>
    </div>

    <!-- Secondary Quick Links Row -->
    <div
      class="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-zinc-400"
    >
      <a
        href={profile.socials[0].href}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 hover:text-emerald-300 transition"
      >
        <Github class="h-4 w-4 text-emerald-400" />
        <span>GitHub</span>
      </a>
      <span>•</span>
      <a
        href={profile.socials[1].href}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 hover:text-emerald-300 transition"
      >
        <Linkedin class="h-4 w-4 text-emerald-400" />
        <span>LinkedIn</span>
      </a>
      <span>•</span>
      <a
        href={profile.cvUrl}
        download
        class="inline-flex items-center gap-1.5 hover:text-emerald-300 transition"
      >
        <FileDown class="h-4 w-4 text-emerald-400" />
        <span>Unduh CV (PDF)</span>
      </a>
    </div>
  </div>

  <!-- Bottom Footer Bar -->
  <div class="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-8">
    <div
      class="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 border-t border-white/10 pt-6 text-xs sm:text-sm text-zinc-400"
    >
      <span class="text-center sm:text-left">© 2026 {profile.fullName}</span>
      <span class="text-center font-mono text-xs text-zinc-400">
        Riau, Indonesia · <span class="text-emerald-400"
          >{currentWibTime} WIB</span
        >
      </span>
      <div class="flex justify-center sm:justify-end">
        <button
          type="button"
          onclick={scrollToTop}
          class="group cursor-pointer inline-flex items-center gap-2 text-xs font-medium text-zinc-300 transition hover:text-emerald-300"
        >
          <span>Back to top</span>
          <ArrowUp
            class="h-3.5 w-3.5 text-emerald-400 transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  </div>
</footer>
