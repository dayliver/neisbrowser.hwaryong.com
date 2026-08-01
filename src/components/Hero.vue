<script setup>
const RELEASE_URL = 'https://github.com/dayliver/neis-browser-release/releases';
</script>

<template>
  <section class="relative overflow-hidden pt-36 pb-24">
    <!-- 배경: 아주 옅은 그리드와 브랜드 글로우 -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
      style="
        background-image:
          linear-gradient(to right, #e4e4e7 1px, transparent 1px),
          linear-gradient(to bottom, #e4e4e7 1px, transparent 1px);
        background-size: 56px 56px;
        mask-image: radial-gradient(ellipse 70% 55% at 50% 0%, #000 40%, transparent 100%);
        -webkit-mask-image: radial-gradient(ellipse 70% 55% at 50% 0%, #000 40%, transparent 100%);
      "
    ></div>
    <div
      class="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[100px]"
    ></div>

    <div class="mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-3xl text-center">
        <a
          href="#features"
          class="reveal inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[12px] font-medium text-muted transition hover:border-faint hover:text-ink-2"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand"></span>
          교사를 위한 나이스 전용 브라우저
        </a>

        <!-- 굵기 대비로 만드는 타이포그래피 -->
        <h1 class="reveal mt-8 text-[clamp(2.6rem,7vw,4.6rem)] leading-[1.12] tracking-tight">
          <span class="block font-extralight text-ink-2">나이스 업무를</span>
          <span class="block font-black text-ink">가볍고 빠르게</span>
        </h1>

        <p class="reveal mx-auto mt-7 max-w-xl text-[15px] font-light leading-[1.85] text-muted">
          깊숙이 숨은 메뉴는 <strong class="font-semibold text-ink-2">F3 한 번</strong>으로 열고,
          엑셀의 여러 행은 <strong class="font-semibold text-ink-2">붙여넣기 한 번</strong>으로 채웁니다.
          매일 반복하던 클릭을 줄이려고 현직 교사가 만들었습니다.
        </p>

        <div class="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            :href="RELEASE_URL"
            target="_blank"
            rel="noopener"
            class="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink px-7 text-[14px] font-semibold text-white shadow-sm transition hover:bg-ink-2 sm:w-auto"
          >
            Windows용 다운로드
            <svg
              class="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            >
              <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" />
            </svg>
          </a>
          <a
            href="#features"
            class="inline-flex h-12 w-full items-center justify-center rounded-xl border border-line bg-white px-7 text-[14px] font-medium text-ink-2 transition hover:bg-surface sm:w-auto"
          >
            어떤 기능인가요
          </a>
        </div>

        <p class="reveal mt-5 text-[12px] font-light text-faint">
          설치만 하면 끝 · 가입 없음 · 무료
        </p>
      </div>

      <!-- 앱 스크린샷 -->
      <div class="reveal relative mx-auto mt-16 max-w-5xl">
        <div class="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_70px_-20px_rgba(9,9,11,0.25)]">
          <img src="/images/hero4.png" alt="나이스브라우저 실행 화면" class="block h-auto w-full" />
        </div>
        <div class="pointer-events-none absolute inset-x-8 -bottom-6 -z-10 h-24 rounded-full bg-ink/10 blur-3xl"></div>
      </div>
    </div>
  </section>
</template>
