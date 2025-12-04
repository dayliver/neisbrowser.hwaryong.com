<script setup>
import { onMounted, ref } from 'vue';

const giscusContainer = ref(null);

onMounted(() => {
  if (!giscusContainer.value) return;

  // Giscus 설정값 (복사해주신 내용을 data-* 속성으로 변환)
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'dayliver/neisbrowser.hwaryong.com');
  script.setAttribute('data-repo-id', 'R_kgDOQiNqoA');
  script.setAttribute('data-category', 'General');
  script.setAttribute('data-category-id', 'DIC_kwDOQiNqoM4CzYsi');
  script.setAttribute('data-mapping', 'url');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top'); // 댓글 입력창을 상단에 배치
  script.setAttribute('data-theme', 'light'); // <-- 이 부분을 'light'로 고정
  script.setAttribute('data-lang', 'ko');
  script.setAttribute('data-loading', 'lazy');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;

  // 컨테이너에 스크립트 삽입
  giscusContainer.value.appendChild(script);
});
</script>

<template>
  <div class="py-12 px-4 max-w-4xl mx-auto" id="comments-section">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">피드백 및 토론</h2>
    <!-- Giscus 댓글이 로드될 컨테이너 -->
    <div ref="giscusContainer">
      <!-- 로딩 중일 때 표시될 내용 -->
      <div class="text-center text-gray-500 py-10">댓글 시스템을 로드 중입니다...</div>
    </div>
  </div>
</template>