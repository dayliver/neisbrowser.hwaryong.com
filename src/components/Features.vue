<script setup>
const HIGHLIGHTS = [
  {
    title: '메뉴 검색',
    desc: 'F3을 누르고 몇 글자만. 학급담임·교과담임까지 경로가 그대로 보입니다.',
    kbd: 'F3'
  },
  {
    title: '일괄 붙여넣기',
    desc: '엑셀에서 복사한 여러 행이 아래 칸으로 이어서 입력됩니다.',
    kbd: 'Ctrl V'
  },
  {
    title: '인증서 자동 입력',
    desc: '저장해둔 암호가 로그인 화면에서 자동으로 채워집니다.',
    kbd: null
  },
  {
    title: '팝업 정리',
    desc: '자동으로 뜨는 공지 팝업은 접어두고, 필요할 때만 펼쳐 봅니다.',
    kbd: null
  }
];
</script>

<template>
  <section id="features" class="scroll-mt-20 border-t border-line py-24">
    <div class="mx-auto max-w-6xl px-6">
      <!-- 섹션 헤더 -->
      <div class="reveal mx-auto max-w-2xl text-center">
        <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Features</p>
        <h2 class="mt-4 text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.25] tracking-tight">
          <span class="block font-extralight text-ink-2">매일 하던 일을</span>
          <span class="block font-bold text-ink">더 적은 손동작으로</span>
        </h2>
      </div>

      <!-- 요약 카드 -->
      <div class="reveal mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="h in HIGHLIGHTS"
          :key="h.title"
          class="rounded-xl border border-line bg-white p-5 transition hover:border-faint hover:shadow-sm"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-[14px] font-semibold text-ink">{{ h.title }}</h3>
            <kbd
              v-if="h.kbd"
              class="rounded-md border border-line bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-muted"
            >{{ h.kbd }}</kbd>
          </div>
          <p class="mt-2 text-[12.5px] font-light leading-[1.7] text-muted">{{ h.desc }}</p>
        </div>
      </div>

      <!-- 상세 1: 메뉴 검색 -->
      <div class="mt-28 grid items-center gap-14 lg:grid-cols-2">
        <div class="reveal order-2 overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-24px_rgba(9,9,11,0.3)] lg:order-1">
          <video autoplay loop muted playsinline class="block h-full w-full object-cover">
            <source src="/videos/demo-search.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="reveal order-1 lg:order-2">
          <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Search</p>
          <h3 class="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] leading-snug tracking-tight">
            <span class="font-extralight text-ink-2">메뉴를 찾지 말고</span><br />
            <span class="font-bold text-ink">이름을 부르세요</span>
          </h3>
          <p class="mt-5 text-[14.5px] font-light leading-[1.85] text-muted">
            메뉴 트리를 단계마다 눌러 들어가는 대신, F3을 누르고 몇 글자만 입력하면 됩니다.
            같은 이름이 여러 곳에 있어도 상단 탭까지 포함한 전체 경로가 보여서 헷갈리지 않습니다.
          </p>
          <ul class="mt-6 space-y-2.5">
            <li class="flex items-start gap-2.5 text-[13.5px] font-light text-ink-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
              자주 여는 메뉴가 위로 올라옵니다
            </li>
            <li class="flex items-start gap-2.5 text-[13.5px] font-light text-ink-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
              한글 전환을 깜빡해도 <span class="font-medium">tngudvudrk</span> → 수행평가로 알아서 찾습니다
            </li>
          </ul>
        </div>
      </div>

      <!-- 상세 2: 일괄 붙여넣기 -->
      <div class="mt-28 grid items-center gap-14 lg:grid-cols-2">
        <div class="reveal">
          <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Paste</p>
          <h3 class="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] leading-snug tracking-tight">
            <span class="font-extralight text-ink-2">한 명씩 말고</span><br />
            <span class="font-bold text-ink">한 번에 전부</span>
          </h3>
          <p class="mt-5 text-[14.5px] font-light leading-[1.85] text-muted">
            특기사항이나 행동특성을 엑셀에 정리해두셨다면, 여러 행을 한꺼번에 복사해
            첫 칸에 붙여넣기만 하세요. 다음 학생 칸으로 이어서 자동으로 입력됩니다.
          </p>
          <ul class="mt-6 space-y-2.5">
            <li class="flex items-start gap-2.5 text-[13.5px] font-light text-ink-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
              입력 중에는 잘못 눌러도 끼어들지 않도록 잠급니다
            </li>
            <li class="flex items-start gap-2.5 text-[13.5px] font-light text-ink-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
              곡선 따옴표 같은 특수문자는 나이스가 받는 형태로 정리됩니다
            </li>
          </ul>
        </div>

        <div class="reveal overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-24px_rgba(9,9,11,0.3)]">
          <video autoplay loop muted playsinline class="block h-full w-full object-cover">
            <source src="/videos/demo-paste.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
