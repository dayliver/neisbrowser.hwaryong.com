<script setup>
const STEPS = [
  { n: '1', t: '내려받은 파일을 실행합니다', d: 'NeisBrowser_…_x64-setup.exe' },
  { n: '2', t: '파란 경고창이 뜨면 “추가 정보”를 누릅니다', d: '“Windows의 PC 보호”라는 제목의 창입니다' },
  { n: '3', t: '나타난 “실행” 버튼을 누릅니다', d: '이후 설치는 몇 초면 끝납니다' }
];
</script>

<template>
  <section id="install" class="scroll-mt-20 border-t border-line bg-surface py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="reveal mx-auto max-w-2xl text-center">
        <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-dark">Install</p>
        <h2 class="mt-4 text-[clamp(1.8rem,3.6vw,2.4rem)] leading-[1.25] tracking-tight">
          <span class="block font-extralight text-ink-2">경고창이 떠도</span>
          <span class="block font-bold text-ink">그대로 설치하셔도 됩니다</span>
        </h2>
        <p class="mt-5 text-[14px] font-light leading-[1.85] text-muted">
          이 프로그램에는 유료 코드 서명 인증서가 없어서, Windows가 처음 보는 프로그램에 띄우는
          안내창이 나타납니다. 바이러스가 발견되었다는 뜻이 아니라
          <strong class="font-medium text-ink-2">“만든 사람을 아직 모른다”</strong>는 표시입니다.
        </p>
      </div>

      <div class="mt-14 grid items-center gap-14 lg:grid-cols-2">
        <!-- 경고창 재현 -->
        <div class="reveal order-2 overflow-hidden rounded-2xl border border-line bg-white p-4 sm:p-6 lg:order-1">
          <svg viewBox="0 0 560 360" class="block h-auto w-full" role="img"
               aria-label="Windows의 PC 보호 경고창에서 추가 정보를 누르는 모습">
            <defs>
              <filter id="dlgShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#09090b" flood-opacity="0.18" />
              </filter>
            </defs>

            <!-- 대화상자 -->
            <g filter="url(#dlgShadow)">
              <rect x="40" y="34" width="480" height="292" rx="10" fill="#ffffff" stroke="#e4e4e7" />
              <rect x="40" y="34" width="480" height="86" rx="10" fill="#0b57a4" />
              <rect x="40" y="104" width="480" height="16" fill="#0b57a4" />
            </g>

            <text x="70" y="76" font-size="19" font-weight="600" fill="#ffffff">Windows의 PC 보호</text>
            <text x="70" y="102" font-size="12.5" font-weight="300" fill="#ffffff" opacity="0.9">
              Microsoft Defender SmartScreen에서 인식할 수 없는 앱의
            </text>

            <text x="70" y="150" font-size="12.5" font-weight="300" fill="#3f3f46">
              시작을 차단했습니다. 이 앱을 실행하면 PC가 위험에 노출될 수
            </text>
            <text x="70" y="172" font-size="12.5" font-weight="300" fill="#3f3f46">있습니다.</text>

            <!-- 여기를 누르세요 -->
            <text x="70" y="212" font-size="13.5" font-weight="700" fill="#0b57a4"
                  text-decoration="underline">추가 정보</text>
            <g>
              <animateTransform attributeName="transform" type="translate"
                                values="0,0; 0,-5; 0,0" dur="1.6s" repeatCount="indefinite" />
              <path d="M152 232 L152 218" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round" />
              <path d="M147 224 L152 217 L157 224" fill="none" stroke="#e11d48" stroke-width="2.4"
                    stroke-linecap="round" stroke-linejoin="round" />
              <rect x="112" y="236" width="82" height="22" rx="11" fill="#e11d48" />
              <text x="153" y="251" font-size="11" font-weight="700" fill="#ffffff"
                    text-anchor="middle">1. 여기</text>
            </g>

            <!-- 실행 버튼 (추가 정보를 누르면 나타남) -->
            <g opacity="0.45">
              <rect x="286" y="278" width="106" height="30" rx="4" fill="#e4e4e7" />
              <text x="339" y="298" font-size="12.5" font-weight="500" fill="#52525b"
                    text-anchor="middle">실행</text>
              <text x="339" y="325" font-size="10.5" font-weight="400" fill="#a1a1aa"
                    text-anchor="middle">2. 그다음 여기</text>
            </g>
            <rect x="402" y="278" width="106" height="30" rx="4" fill="#f4f4f5" stroke="#d4d4d8" />
            <text x="455" y="298" font-size="12.5" font-weight="500" fill="#52525b"
                  text-anchor="middle">실행 안 함</text>
          </svg>
        </div>

        <!-- 단계 -->
        <div class="reveal order-1 lg:order-2">
          <ol class="space-y-5">
            <li v-for="s in STEPS" :key="s.n" class="flex gap-4">
              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-white"
              >{{ s.n }}</span>
              <div class="min-w-0">
                <p class="text-[14.5px] font-medium leading-snug text-ink">{{ s.t }}</p>
                <p class="mt-1 text-[12.5px] font-light text-muted">{{ s.d }}</p>
              </div>
            </li>
          </ol>

          <div class="mt-8 rounded-xl border border-line bg-white p-5">
            <p class="text-[13px] font-semibold text-ink">설치에 대해 알아두실 점</p>
            <ul class="mt-3 space-y-2">
              <li class="flex items-start gap-2.5 text-[12.5px] font-light leading-relaxed text-muted">
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
                관리자 권한이 필요 없습니다. 학교 컴퓨터에서도 그대로 설치됩니다
              </li>
              <li class="flex items-start gap-2.5 text-[12.5px] font-light leading-relaxed text-muted">
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
                기존 나이스브라우저와 나란히 설치되므로, 비교해 보고 정하셔도 됩니다
              </li>
              <li class="flex items-start gap-2.5 text-[12.5px] font-light leading-relaxed text-muted">
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"></span>
                지우실 때는 설정 → 앱에서 “나이스브라우저”를 제거하시면 됩니다
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
