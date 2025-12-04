<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#f6f5f5] py-4' // Slack은 최상단에선 배경색이 자연스럽게 이어짐
  ]">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <div class="flex items-center gap-2 cursor-pointer" @click="window.scrollTo(0,0)">
        <img src="/logo.png" alt="Logo" class="w-10 h-10 rounded-lg shadow-sm" />
        <span class="font-bold text-2xl tracking-tight text-gray-900">나이스브라우저</span>
      </div>

      <div class="flex items-center gap-4">
        <a href="#" class="hidden md:block font-medium text-gray-600 hover:text-brand transition">기능 소개</a>
        <button class="bg-brand text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-brand-dark transition shadow-sm uppercase tracking-wide">
          무료 다운로드
        </button>
      </div>
    </div>
  </nav>
</template>