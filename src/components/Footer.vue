<script setup>
const RELEASE_URL = 'https://github.com/dayliver/neis-browser-release/releases';
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-line bg-white">
    <!-- 마지막 권유 -->
    <div class="mx-auto max-w-6xl px-6 py-20 text-center">
      <h2 class="reveal text-[clamp(1.7rem,3.4vw,2.3rem)] leading-[1.25] tracking-tight">
        <span class="block font-extralight text-ink-2">오늘 퇴근을</span>
        <span class="block font-bold text-ink">조금 더 일찍</span>
      </h2>
      <div class="reveal mt-8">
        <a
          :href="RELEASE_URL"
          target="_blank"
          rel="noopener"
          class="inline-flex h-12 items-center justify-center rounded-xl bg-ink px-8 text-[14px] font-semibold text-white transition hover:bg-ink-2"
        >
          Windows용 다운로드
        </a>
      </div>
      <p class="reveal mt-4 text-[12px] font-light text-faint">Windows 10 이상 · 무료</p>
    </div>

    <!-- 저작권 -->
    <div class="border-t border-line">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-7 sm:flex-row"
      >
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="" class="h-5 w-5 rounded" />
          <span class="text-[12.5px] font-medium text-ink-2">나이스브라우저</span>
        </div>
        <div class="flex items-center gap-5">
          <a
            href="https://github.com/dayliver/neis-browser"
            target="_blank"
            rel="noopener"
            class="text-[12px] font-light text-muted transition hover:text-ink"
          >GitHub</a>
          <a
            href="#comments-section"
            class="text-[12px] font-light text-muted transition hover:text-ink"
          >피드백</a>
          <span class="text-[12px] font-light text-faint">© {{ year }} Hwaryong</span>
        </div>
      </div>
    </div>
  </footer>
</template>
