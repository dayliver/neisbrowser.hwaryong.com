<script setup>
/**
 * 앱 화면 목업 (벡터).
 * 실제 화면을 캡처하면 학생 정보가 담기므로, UI만 동일하게 재현했다.
 * 사이트와 같은 서체·색을 쓰므로 화면 크기와 무관하게 선명하다.
 */
const RESULTS = [
  { path: '[업무] > 학급담임 > 성적', name: '수행평가 조회', hot: '12회', sel: true },
  { path: '[업무] > 교과담임 > 성적', name: '수행평가 기준안', hot: null, sel: false },
  { path: '[업무] > 교과담임 > 성적', name: '수행평가 결과 입력', hot: '4회', sel: false }
];
</script>

<template>
  <svg viewBox="0 0 1000 640" class="block h-auto w-full" role="img"
       aria-label="나이스브라우저 화면: 탭 브라우저와 F3 메뉴 검색 창">
    <defs>
      <clipPath id="win">
        <rect x="0" y="0" width="1000" height="640" rx="14" />
      </clipPath>
      <filter id="soften" x="-5%" y="-5%" width="110%" height="110%">
        <feGaussianBlur stdDeviation="3.4" />
      </filter>
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="160%">
        <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#09090b" flood-opacity="0.22" />
      </filter>

      <!-- 한 글자씩 입력되는 효과: 글자를 가리는 사각형의 폭을 단계적으로 넓힌다 -->
      <clipPath id="typeHero">
        <rect x="236" y="138" width="0" height="26">
          <animate attributeName="width" calcMode="discrete" dur="6s" repeatCount="indefinite"
                   keyTimes="0;0.06;0.11;0.16;0.21;1" values="0;19;36;53;72;72" />
        </rect>
      </clipPath>
    </defs>

    <g clip-path="url(#win)">
      <rect width="1000" height="640" fill="#ffffff" />

      <!-- ───── 탭바 (프레임리스 창의 제목표시줄 역할) ───── -->
      <rect width="1000" height="46" fill="#f4f4f5" />
      <line x1="0" y1="46" x2="1000" y2="46" stroke="#e4e4e7" stroke-width="1" />

      <!-- 비활성 탭 -->
      <text x="24" y="28" font-size="13" font-weight="400" fill="#8b8b93">업무포털</text>

      <!-- 활성 탭 (메뉴 검색은 나이스 화면에서 쓰는 기능) -->
      <rect x="94" y="8" width="130" height="31" rx="9" fill="#ffffff" stroke="#d4d4d8" />
      <text x="110" y="28" font-size="13" font-weight="600" fill="#09090b">나이스</text>
      <path d="M201 19l8 8M209 19l-8 8" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round" />

      <!-- 비활성 탭 -->
      <text x="244" y="28" font-size="13" font-weight="400" fill="#8b8b93">K-에듀파인</text>

      <!-- 새 탭 -->
      <path d="M366 23h13M372.5 16.5v13" stroke="#8b8b93" stroke-width="1.7" stroke-linecap="round" />

      <!-- F3 힌트 -->
      <rect x="768" y="14" width="26" height="18" rx="5" fill="#ffffff" stroke="#e4e4e7" />
      <text x="781" y="27" font-size="10" font-weight="700" fill="#52525b" text-anchor="middle">F3</text>
      <text x="800" y="27" font-size="11" font-weight="300" fill="#a1a1aa">메뉴 검색</text>

      <!-- 창 컨트롤 -->
      <path d="M880 23h11" stroke="#71717a" stroke-width="1.6" stroke-linecap="round" />
      <rect x="921" y="18" width="11" height="11" rx="2.5" stroke="#71717a" stroke-width="1.6" fill="none" />
      <path d="M962 18l11 11M973 18l-11 11" stroke="#71717a" stroke-width="1.6" stroke-linecap="round" />

      <!-- ───── 뒤쪽 나이스 화면 (블러 처리된 배경) ───── -->
      <g filter="url(#soften)" opacity="0.9">
        <!-- 상단 업무 탭 -->
        <rect x="0" y="46" width="1000" height="42" fill="#ffffff" />
        <rect x="28" y="58" width="74" height="20" rx="10" fill="#dbeafe" />
        <rect x="116" y="58" width="74" height="20" rx="10" fill="#f4f4f5" />
        <rect x="204" y="58" width="88" height="20" rx="10" fill="#f4f4f5" />
        <rect x="306" y="58" width="60" height="20" rx="10" fill="#f4f4f5" />

        <!-- 좌측 메뉴 트리 -->
        <rect x="0" y="88" width="196" height="552" fill="#fafafa" />
        <line x1="196" y1="88" x2="196" y2="640" stroke="#e4e4e7" />
        <g fill="#d4d4d8">
          <rect x="22" y="112" width="104" height="9" rx="4.5" />
          <rect x="34" y="140" width="86" height="8" rx="4" />
          <rect x="34" y="164" width="112" height="8" rx="4" />
          <rect x="22" y="196" width="120" height="9" rx="4.5" />
          <rect x="34" y="224" width="94" height="8" rx="4" />
          <rect x="34" y="248" width="76" height="8" rx="4" />
          <rect x="22" y="280" width="98" height="9" rx="4.5" />
          <rect x="34" y="308" width="108" height="8" rx="4" />
        </g>

        <!-- 본문 표 -->
        <rect x="196" y="88" width="804" height="552" fill="#ffffff" />
        <rect x="228" y="116" width="150" height="12" rx="6" fill="#d4d4d8" />
        <rect x="228" y="152" width="740" height="30" rx="6" fill="#f4f4f5" />
        <g fill="#e4e4e7">
          <rect x="228" y="192" width="740" height="26" rx="5" />
          <rect x="228" y="226" width="740" height="26" rx="5" />
          <rect x="228" y="260" width="740" height="26" rx="5" />
          <rect x="228" y="294" width="740" height="26" rx="5" />
          <rect x="228" y="328" width="740" height="26" rx="5" />
          <rect x="228" y="362" width="740" height="26" rx="5" />
        </g>
      </g>

      <!-- 딤 레이어 -->
      <rect y="46" width="1000" height="594" fill="#09090b" opacity="0.22" />

      <!-- ───── F3 검색 팔레트 ───── -->
      <g filter="url(#cardShadow)">
        <rect x="190" y="120" width="620" height="330" rx="16" fill="#ffffff" stroke="#e4e4e7" />
      </g>

      <!-- 검색 입력 -->
      <g transform="translate(190,120)">
        <circle cx="30" cy="30" r="7" fill="none" stroke="#a1a1aa" stroke-width="2" />
        <path d="M35 35l5 5" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round" />
        <text x="52" y="35" font-size="15" font-weight="400" fill="#18181b" clip-path="url(#typeHero)">수행평가</text>

        <!-- 커서: 입력된 글자 수만큼 오른쪽으로 이동 -->
        <g>
          <animateTransform attributeName="transform" type="translate" calcMode="discrete"
                            dur="6s" repeatCount="indefinite"
                            keyTimes="0;0.06;0.11;0.16;0.21;1"
                            values="0,0;17,0;34,0;51,0;68,0;68,0" />
          <rect x="52" y="21" width="1.6" height="18" fill="#18181b">
            <animate attributeName="opacity" values="1;1;0;0" dur="1.1s" repeatCount="indefinite" />
          </rect>
        </g>

        <!-- 결과 개수는 입력이 끝난 뒤 나타남 -->
        <g>
          <animate attributeName="opacity" calcMode="discrete" dur="6s" repeatCount="indefinite"
                   keyTimes="0;0.23;1" values="0;1;1" />
          <rect x="548" y="20" width="42" height="20" rx="10" fill="#f4f4f5" />
          <text x="569" y="34" font-size="11" font-weight="500" fill="#a1a1aa" text-anchor="middle">3</text>
        </g>
        <line x1="0" y1="56" x2="620" y2="56" stroke="#f4f4f5" />
      </g>

      <!-- 결과 목록 (입력이 끝난 뒤 나타남) -->
      <g transform="translate(198,184)">
        <animate attributeName="opacity" calcMode="discrete" dur="6s" repeatCount="indefinite"
                 keyTimes="0;0.23;1" values="0;1;1" />
        <g v-for="(r, i) in RESULTS" :key="r.name" :transform="`translate(0, ${i * 62})`">
          <rect v-if="r.sel" x="0" y="0" width="604" height="56" rx="10" fill="#f4f4f5" />
          <text x="14" y="24" font-size="14" font-weight="500" fill="#27272a">{{ r.name }}</text>
          <!-- 사용 횟수 배지는 오른쪽 끝에 고정 -->
          <g v-if="r.hot">
            <rect x="552" y="11" width="38" height="17" rx="8.5" fill="#ffffff" stroke="#e4e4e7" />
            <text x="571" y="23" font-size="10" font-weight="500"
                  fill="#52525b" text-anchor="middle">{{ r.hot }}</text>
          </g>
          <text x="14" y="42" font-size="11" font-weight="300" fill="#a1a1aa">{{ r.path }}</text>
        </g>
      </g>

      <!-- 팔레트 푸터 -->
      <g transform="translate(190,120)">
        <line x1="0" y1="274" x2="620" y2="274" stroke="#f4f4f5" />
        <rect x="0" y="274" width="620" height="56" rx="0" fill="#fafafa" />
        <rect x="16" y="292" width="26" height="17" rx="5" fill="#ffffff" stroke="#e4e4e7" />
        <text x="29" y="304" font-size="9.5" font-weight="700" fill="#52525b" text-anchor="middle">↑↓</text>
        <text x="48" y="304" font-size="11" font-weight="300" fill="#a1a1aa">이동</text>
        <rect x="86" y="292" width="40" height="17" rx="5" fill="#ffffff" stroke="#e4e4e7" />
        <text x="106" y="304" font-size="9.5" font-weight="700" fill="#52525b" text-anchor="middle">Enter</text>
        <text x="132" y="304" font-size="11" font-weight="300" fill="#a1a1aa">실행</text>
        <rect x="170" y="292" width="30" height="17" rx="5" fill="#ffffff" stroke="#e4e4e7" />
        <text x="185" y="304" font-size="9.5" font-weight="700" fill="#52525b" text-anchor="middle">Esc</text>
        <text x="206" y="304" font-size="11" font-weight="300" fill="#a1a1aa">닫기</text>
      </g>

      <rect x="0.5" y="0.5" width="999" height="639" rx="14" fill="none" stroke="#e4e4e7" />
    </g>
  </svg>
</template>
