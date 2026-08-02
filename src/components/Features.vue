<script setup>
import SearchMockup from './SearchMockup.vue';
import PasteMockup from './PasteMockup.vue';
import WideMockup from './WideMockup.vue';

const HIGHLIGHTS = [
  {
    title: '메뉴 검색',
    desc: 'F3을 누르고 몇 글자만. 학급담임·교과담임까지 경로가 그대로 보입니다.',
    kbd: 'F3'
  },
  {
    title: '넓게 보기',
    desc: '한 번 누르면 메뉴가 접히고 업무 화면이 창을 가득 채웁니다.',
    kbd: 'F11'
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
        <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-dark">Features</p>
        <h2 class="mt-4 text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.25] tracking-tight">
          <span class="block font-extralight text-ink-2">매일 하던 일을</span>
          <span class="block font-bold text-ink">더 적은 손동작으로</span>
        </h2>
      </div>

      <!-- 요약 카드 -->
      <div class="reveal mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
        <div class="reveal order-2 overflow-hidden rounded-2xl border border-line bg-surface p-4 sm:p-6 lg:order-1">
          <SearchMockup />
        </div>

        <div class="reveal order-1 lg:order-2">
          <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-dark">Search</p>
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
          <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-dark">Paste</p>
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

        <div class="reveal overflow-hidden rounded-2xl border border-line bg-surface p-4 sm:p-6">
          <PasteMockup />
        </div>
      </div>

      <!-- 상세 3: 넓게 보기 -->
      <div class="mt-28 grid items-center gap-14 lg:grid-cols-2">
        <div class="reveal order-2 overflow-hidden rounded-2xl border border-line bg-surface p-4 sm:p-6 lg:order-1">
          <WideMockup />
        </div>

        <div class="reveal order-1 lg:order-2">
          <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-dark">Wide</p>
          <h3 class="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] leading-snug tracking-tight">
            <span class="block font-extralight text-ink-2">단축키 하나로</span>
            <span class="block font-bold text-ink">화면을 넓게</span>
          </h3>
          <p class="mt-5 text-[14.5px] font-light leading-[1.85] text-muted">
            성적이나 출결처럼 표가 넓은 화면에서는 늘 가로로 스크롤하게 됩니다.
            <strong class="font-semibold text-ink-2">F11</strong>을 누르면 상단·좌측 메뉴가 한 번에 접히고
            업무 화면이 창을 가득 채웁니다. 보이는 작업 공간이 약 28% 넓어집니다.
          </p>
          <ul class="mt-6 space-y-2.5">
            <li class="flex items-start gap-2.5 text-[13.5px] font-light text-ink-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
              다시 <span class="font-medium">F11</span>을 누르면 원래대로 돌아옵니다
            </li>
            <li class="flex items-start gap-2.5 text-[13.5px] font-light text-ink-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
              <span class="font-medium">F10</span>은 좌측 메뉴만 접어 목록은 그대로 두고 넓힙니다
            </li>
            <li class="flex items-start gap-2.5 text-[13.5px] font-light text-ink-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
              나이스 화면은 그대로라 하던 작업이 끊기지 않습니다
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
