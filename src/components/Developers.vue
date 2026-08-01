<script setup>
const DEVELOPERS = [
  { name: '신화룡', role: '개발', school: '대륜고등학교 교사', photoUrl: '/images/hwaryong.png' },
  { name: '홍대화', role: '개발 지원', school: '대륜고등학교 교사', photoUrl: '/images/daehwa.png' }
];
</script>

<template>
  <section class="border-t border-line bg-surface py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="reveal mx-auto max-w-2xl text-center">
        <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Makers</p>
        <h2 class="mt-4 text-[clamp(1.8rem,3.6vw,2.4rem)] leading-[1.25] tracking-tight">
          <span class="block font-extralight text-ink-2">쓰는 사람이</span>
          <span class="block font-bold text-ink">직접 만들었습니다</span>
        </h2>
        <p class="mt-5 text-[14px] font-light leading-[1.85] text-muted">
          교무실에서 매일 나이스를 쓰는 현직 교사들이 필요해서 만들고, 필요해서 고쳐왔습니다.
        </p>
      </div>

      <div class="reveal mx-auto mt-14 flex max-w-2xl flex-col gap-3 sm:flex-row">
        <div
          v-for="dev in DEVELOPERS"
          :key="dev.name"
          class="flex flex-1 items-center gap-4 rounded-xl border border-line bg-white p-5"
        >
          <img
            :src="dev.photoUrl"
            :alt="dev.name"
            class="h-14 w-14 shrink-0 rounded-full border border-line object-cover"
          />
          <div class="min-w-0">
            <h3 class="text-[15px] font-semibold text-ink">{{ dev.name }}</h3>
            <p class="mt-0.5 text-[12.5px] font-medium text-brand">{{ dev.role }}</p>
            <p class="mt-0.5 truncate text-[12px] font-light text-muted">{{ dev.school }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
