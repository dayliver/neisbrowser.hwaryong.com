<script setup>
import Giscus from '@giscus/vue';
</script>

<template>
  <div class="py-12 px-4 max-w-4xl mx-auto" id="comments-section">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">피드백 및 토론</h2>
    
    <Giscus
      repo="dayliver/neisbrowser.hwaryong.com"
      repoId="R_kgDOQiNqoA"
      category="General"
      categoryId="DIC_kwDOQiNqoM4CzYsi"
      mapping="url"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="ko"
      loading="lazy"
    />
  </div>
</template>