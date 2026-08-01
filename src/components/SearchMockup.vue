<script setup>
/** F3 메뉴 검색 — 같은 이름의 메뉴도 경로로 구분되는 모습 (벡터) */
const RESULTS = [
  { path: '[업무] > 학급담임 > 성적', name: '수행평가 조회', hot: '12회', sel: true },
  { path: '[업무] > 교과담임 > 성적', name: '수행평가 기준안', hot: null, sel: false },
  { path: '[업무] > 교과담임 > 성적', name: '수행평가 결과 입력', hot: '4회', sel: false },
  { path: '[기본] > 나의메뉴', name: '수행평가 계획 관리', hot: null, sel: false }
];
</script>

<template>
  <svg viewBox="0 0 720 460" class="block h-auto w-full" role="img"
       aria-label="F3 메뉴 검색 창: 같은 이름의 메뉴가 경로로 구분되어 나열된 모습">
    <defs>
      <filter id="paletteShadow" x="-20%" y="-20%" width="140%" height="160%">
        <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#09090b" flood-opacity="0.16" />
      </filter>

      <!-- 한 글자씩 입력되는 효과.
           좌표는 clip-path를 적용한 요소가 속한 그룹의 지역 좌표 기준
           (검색줄 그룹 translate(40,40) 안쪽). -->
      <clipPath id="typeSearch">
        <rect x="50" y="18" width="0" height="26">
          <animate attributeName="width" calcMode="discrete" dur="6s" repeatCount="indefinite"
                   keyTimes="0;0.06;0.11;0.16;0.21;1" values="0;19;34;50;68;68" />
        </rect>
      </clipPath>
    </defs>

    <!-- 팔레트 -->
    <g filter="url(#paletteShadow)">
      <rect x="40" y="40" width="640" height="300" rx="16" fill="#ffffff" stroke="#e4e4e7" />
    </g>

    <!-- 입력줄 -->
    <g transform="translate(40,40)">
      <circle cx="32" cy="30" r="7" fill="none" stroke="#a1a1aa" stroke-width="2" />
      <path d="M37 35l5 5" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round" />
      <text x="56" y="35" font-size="15" font-weight="400" fill="#18181b" clip-path="url(#typeSearch)">수행평가</text>

      <!-- 커서: 입력된 글자 수만큼 오른쪽으로 이동 -->
      <g>
        <animateTransform attributeName="transform" type="translate" calcMode="discrete"
                          dur="6s" repeatCount="indefinite"
                          keyTimes="0;0.06;0.11;0.16;0.21;1"
                          values="0,0;16,0;32,0;48,0;64,0;64,0" />
        <rect x="56" y="21" width="1.6" height="18" fill="#18181b">
          <animate attributeName="opacity" values="1;1;0;0" dur="1.1s" repeatCount="indefinite" />
        </rect>
      </g>

      <!-- 결과 개수는 입력이 끝난 뒤 나타남 -->
      <g>
        <animate attributeName="opacity" calcMode="discrete" dur="6s" repeatCount="indefinite"
                 keyTimes="0;0.23;1" values="0;1;1" />
        <rect x="566" y="20" width="42" height="20" rx="10" fill="#f4f4f5" />
        <text x="587" y="34" font-size="11" font-weight="500" fill="#a1a1aa" text-anchor="middle">4</text>
      </g>
      <line x1="0" y1="56" x2="640" y2="56" stroke="#f4f4f5" />
    </g>

    <!-- 결과 (입력이 끝난 뒤 나타남) -->
    <g transform="translate(48,104)">
      <animate attributeName="opacity" calcMode="discrete" dur="6s" repeatCount="indefinite"
               keyTimes="0;0.23;1" values="0;1;1" />
      <g v-for="(r, i) in RESULTS" :key="r.name" :transform="`translate(0, ${i * 56})`">
        <rect v-if="r.sel" x="0" y="0" width="624" height="50" rx="10" fill="#f4f4f5" />
        <text x="14" y="22" font-size="13.5" font-weight="500" fill="#27272a">{{ r.name }}</text>
        <!-- 사용 횟수 배지는 오른쪽 끝에 고정 -->
        <g v-if="r.hot">
          <rect x="572" y="9" width="36" height="16" rx="8" fill="#ffffff" stroke="#e4e4e7" />
          <text x="590" y="21" font-size="9.5" font-weight="500"
                fill="#52525b" text-anchor="middle">{{ r.hot }}</text>
        </g>
        <text x="14" y="39" font-size="10.5" font-weight="300" fill="#a1a1aa">{{ r.path }}</text>
      </g>
    </g>

    <!-- 강조: 같은 이름도 소속 탭으로 구분된다 -->
    <g transform="translate(40,356)">
      <rect x="0" y="0" width="640" height="76" rx="12" fill="#eff6ff" stroke="#bfdbfe" />
      <circle cx="30" cy="27" r="3.5" fill="#4f93da" />
      <text x="46" y="31" font-size="12" font-weight="600" fill="#1e40af">
        학급담임과 교과담임에 같은 메뉴가 있어도 경로로 구분됩니다
      </text>
      <text x="46" y="55" font-size="11.5" font-weight="300" fill="#3f3f46">
        자주 여는 메뉴는 위로 올라오고, 한글 전환을 깜빡해도 알아서 찾아줍니다
      </text>
    </g>
  </svg>
</template>
