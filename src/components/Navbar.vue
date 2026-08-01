<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const RELEASE_URL = 'https://github.com/dayliver/neis-browser-release/releases';
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 8;
};
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <nav
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      isScrolled
        ? 'border-b border-line bg-white/80 backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent'
    ]"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <button class="flex items-center gap-2.5" @click="toTop">
        <img src="/logo.png" alt="" class="h-7 w-7 rounded-md" />
        <span class="text-[15px] font-semibold tracking-tight text-ink">나이스브라우저</span>
      </button>

      <div class="flex items-center gap-1">
        <a
          href="#features"
          class="hidden rounded-lg px-3 py-2 text-[13px] font-medium text-muted transition hover:bg-surface hover:text-ink sm:block"
        >기능</a>
        <a
          href="#comments-section"
          class="hidden rounded-lg px-3 py-2 text-[13px] font-medium text-muted transition hover:bg-surface hover:text-ink sm:block"
        >피드백</a>
        <a
          :href="RELEASE_URL"
          target="_blank"
          rel="noopener"
          class="ml-2 rounded-lg bg-ink px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-ink-2"
        >
          다운로드
        </a>
      </div>
    </div>
  </nav>
</template>
