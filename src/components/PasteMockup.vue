<script setup>
/** 엑셀 → 나이스 그리드 일괄 붙여넣기 흐름 목업 (벡터) */
const ROWS = [
  { no: '1', text: '맡은 역할에 성실하고 친구를 잘 돕는다' },
  { no: '2', text: '탐구 활동에서 끈기 있게 자료를 모은다' },
  { no: '3', text: '토론에서 근거를 들어 의견을 제시한다' },
  { no: '4', text: '학급 규칙을 지키며 분위기를 이끈다' }
];
</script>

<template>
  <svg viewBox="0 0 720 460" class="block h-auto w-full" role="img"
       aria-label="엑셀에서 복사한 여러 행이 나이스 입력칸에 차례로 들어가는 모습">
    <!-- 엑셀 쪽 -->
    <g transform="translate(24,26)">
      <text x="0" y="0" font-size="11" font-weight="600" fill="#a1a1aa" letter-spacing="1.4">EXCEL</text>
      <rect x="0" y="14" width="292" height="176" rx="10" fill="#ffffff" stroke="#e4e4e7" />
      <rect x="0" y="14" width="292" height="28" rx="10" fill="#f4f4f5" />
      <rect x="0" y="34" width="292" height="8" fill="#f4f4f5" />
      <line x1="0" y1="42" x2="292" y2="42" stroke="#e4e4e7" />
      <text x="14" y="33" font-size="10.5" font-weight="600" fill="#71717a">A</text>
      <text x="46" y="33" font-size="10.5" font-weight="600" fill="#71717a">행동특성 및 종합의견</text>

      <!-- 선택된 4행 -->
      <rect x="6" y="48" width="280" height="134" rx="7" fill="#eff6ff" stroke="#4f93da" stroke-width="1.4" />
      <g v-for="(r, i) in ROWS" :key="r.no" :transform="`translate(0, ${i * 32})`">
        <text x="18" y="70" font-size="10" font-weight="500" fill="#a1a1aa">{{ r.no }}</text>
        <text x="40" y="70" font-size="10.5" font-weight="300" fill="#3f3f46">{{ r.text }}</text>
      </g>
    </g>

    <!-- 화살표 -->
    <g transform="translate(340,120)">
      <path d="M0 0h40" stroke="#a1a1aa" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="4 5" />
      <path d="M34 -5l6 5-6 5" fill="none" stroke="#a1a1aa" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
      <rect x="-14" y="16" width="68" height="19" rx="9.5" fill="#18181b" />
      <text x="20" y="29" font-size="10" font-weight="600" fill="#ffffff" text-anchor="middle">Ctrl + V</text>
    </g>

    <!-- 나이스 쪽 -->
    <g transform="translate(404,26)">
      <text x="0" y="0" font-size="11" font-weight="600" fill="#a1a1aa" letter-spacing="1.4">NEIS</text>
      <rect x="0" y="14" width="292" height="176" rx="10" fill="#ffffff" stroke="#e4e4e7" />
      <rect x="0" y="14" width="292" height="28" rx="10" fill="#f4f4f5" />
      <rect x="0" y="34" width="292" height="8" fill="#f4f4f5" />
      <line x1="0" y1="42" x2="292" y2="42" stroke="#e4e4e7" />
      <text x="14" y="33" font-size="10.5" font-weight="600" fill="#71717a">번호</text>
      <text x="52" y="33" font-size="10.5" font-weight="600" fill="#71717a">행동특성 및 종합의견</text>

      <g v-for="(r, i) in ROWS" :key="r.no" :transform="`translate(0, ${i * 32})`">
        <line x1="8" :y1="80" x2="284" :y2="80" stroke="#f4f4f5" />
        <text x="18" y="70" font-size="10" font-weight="500" fill="#a1a1aa">{{ r.no }}</text>
        <text x="42" y="70" font-size="10.5" font-weight="300" fill="#3f3f46">{{ r.text }}</text>
        <!-- 입력되는 순서대로 나타남 -->
        <animate attributeName="opacity" values="0;0;1;1;1" :begin="`${i * 0.35}s`"
                 dur="2.4s" repeatCount="indefinite" />
      </g>
    </g>

    <!-- 진행 알림 (앱이 입력 중 잠금 상태에서 보여주는 것) -->
    <g transform="translate(238,236)">
      <rect x="0" y="0" width="244" height="42" rx="21" fill="#18181b" />
      <circle cx="26" cy="21" r="6.5" fill="none" stroke="#ffffff" stroke-opacity="0.3" stroke-width="2" />
      <path d="M26 14.5a6.5 6.5 0 0 1 6.5 6.5" fill="none" stroke="#ffffff" stroke-width="2"
            stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 26 21" to="360 26 21"
                          dur="0.8s" repeatCount="indefinite" />
      </path>
      <text x="46" y="26" font-size="12" font-weight="500" fill="#ffffff">붙여넣는 중... (4/4)</text>
    </g>

    <!-- 설명 -->
    <g transform="translate(24,318)">
      <rect x="0" y="0" width="672" height="118" rx="12" fill="#fafafa" stroke="#e4e4e7" />
      <text x="22" y="34" font-size="12.5" font-weight="600" fill="#27272a">첫 칸에 붙여넣기만 하면 됩니다</text>
      <text x="22" y="60" font-size="11.5" font-weight="300" fill="#71717a">
        복사한 줄 수만큼 아래 칸으로 이어서 입력되고, 진행 상황이 표시됩니다.
      </text>
      <text x="22" y="82" font-size="11.5" font-weight="300" fill="#71717a">
        입력하는 동안에는 실수로 다른 곳을 눌러도 끼어들지 않도록 잠급니다.
      </text>
      <text x="22" y="104" font-size="11.5" font-weight="300" fill="#71717a">
        입력칸이 모자라면 몇 건이 남았는지 알려줍니다.
      </text>
    </g>
  </svg>
</template>
