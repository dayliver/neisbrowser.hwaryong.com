<script setup>
const RELEASE_URL = 'https://github.com/dayliver/neis-browser-release/releases';
</script>
<template>
  <section class="py-24 bg-brand text-white text-center px-6 clip-path-slant">
    <h2 class="text-4xl font-bold mb-6">업무 스트레스, 이제 그만.</h2>
    <p class="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
      이미 많은 선생님들이 나이스브라우저를 통해<br/>
      매일 30분 이상의 업무 시간을 절약하고 계십니다.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a :href="RELEASE_URL" target="_blank" class="bg-white text-brand px-10 py-4 rounded text-lg font-bold hover:bg-gray-100 transition shadow-lg">
        무료로 시작하기
        </a>
        <a href="https://dayliver.hwaryong.com/support" target="_blank" class="bg-transparent border border-white text-white px-10 py-4 rounded text-lg font-bold hover:bg-white/10 transition">
        개발자에게 커피 사주기
        </a>
    </div>
  </section>
</template>

<style scoped>
/* 선택사항: 사선 효과 (Slack 느낌) */
/* .clip-path-slant {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
} */
/* 위 주석을 풀면 하단이 사선으로 잘리는 효과를 줄 수 있습니다 */
</style>