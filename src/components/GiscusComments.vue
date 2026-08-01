<script setup>
import Giscus from '@giscus/vue';
</script>

<template>
  <section id="comments-section" class="scroll-mt-20 border-t border-line py-24">
    <div class="mx-auto max-w-3xl px-6">
      <div class="reveal text-center">
        <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-dark">Feedback</p>
        <h2 class="mt-4 text-[clamp(1.8rem,3.6vw,2.4rem)] leading-[1.25] tracking-tight">
          <span class="block font-extralight text-ink-2">불편한 점이 있다면</span>
          <span class="block font-bold text-ink">알려주세요</span>
        </h2>
        <p class="mt-5 text-[14px] font-light leading-[1.85] text-muted">
          기능 제안도 버그 제보도 환영합니다. GitHub 계정으로 남기실 수 있습니다.
        </p>
      </div>

      <div class="reveal mt-12 rounded-2xl border border-line bg-white p-6 sm:p-8">
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
    </div>
  </section>
</template>
