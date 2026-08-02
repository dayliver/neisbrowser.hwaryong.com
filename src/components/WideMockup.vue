<script setup>
/** F11 넓게 보기 — 업무 공간이 얼마나 넓어지는지 비교 (벡터) */
</script>

<template>
  <svg viewBox="0 0 720 380" class="block h-auto w-full" role="img"
       aria-label="F11을 누르면 상단·좌측 메뉴가 접히고 업무 화면이 창을 가득 채우는 모습">
    <!-- 지금 -->
    <g transform="translate(24,44)">
      <text x="0" y="-14" font-size="11" font-weight="600" fill="#a1a1aa" letter-spacing="1.2">지금</text>
      <rect x="0" y="0" width="290" height="196" rx="8" fill="#ffffff" stroke="#e4e4e7" />
      <!-- 상단 메뉴 -->
      <rect x="1" y="1" width="288" height="26" rx="7" fill="#e4e4e7" />
      <rect x="1" y="20" width="288" height="8" fill="#e4e4e7" />
      <!-- 좌측 메뉴 -->
      <rect x="1" y="28" width="62" height="167" fill="#f4f4f5" />
      <g fill="#d4d4d8">
        <rect x="10" y="40" width="44" height="5" rx="2.5" />
        <rect x="14" y="56" width="36" height="4" rx="2" />
        <rect x="14" y="70" width="40" height="4" rx="2" />
        <rect x="10" y="88" width="44" height="5" rx="2.5" />
        <rect x="14" y="104" width="34" height="4" rx="2" />
      </g>
      <!-- 업무 영역 -->
      <rect x="69" y="34" width="214" height="155" rx="5" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="176" y="115" font-size="11.5" font-weight="600" fill="#2563eb" text-anchor="middle">업무 화면</text>
    </g>

    <!-- 화살표 + 키 -->
    <g transform="translate(338,140)">
      <path d="M0 2h34" stroke="#a1a1aa" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="4 5" />
      <path d="M28 -3l6 5-6 5" fill="none" stroke="#a1a1aa" stroke-width="1.8"
            stroke-linecap="round" stroke-linejoin="round" />
      <rect x="-2" y="18" width="40" height="22" rx="6" fill="#18181b" />
      <text x="18" y="33" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">F11</text>
    </g>

    <!-- 넓게 보기 -->
    <g transform="translate(406,44)">
      <text x="0" y="-14" font-size="11" font-weight="600" fill="#2563eb" letter-spacing="1.2">넓게 보기</text>
      <rect x="0" y="0" width="290" height="196" rx="8" fill="#ffffff" stroke="#bfdbfe" />
      <rect x="6" y="6" width="278" height="184" rx="5" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="145" y="100" font-size="12.5" font-weight="700" fill="#2563eb" text-anchor="middle">업무 화면</text>
      <text x="145" y="120" font-size="10.5" font-weight="400" fill="#60a5fa" text-anchor="middle">
        메뉴가 접히고 화면을 가득
      </text>
    </g>

    <!-- 설명 -->
    <g transform="translate(24,270)">
      <rect x="0" y="0" width="672" height="86" rx="12" fill="#fafafa" stroke="#e4e4e7" />
      <text x="22" y="32" font-size="12.5" font-weight="600" fill="#27272a">
        보이는 작업 공간이 약 28% 넓어집니다
      </text>
      <text x="22" y="56" font-size="11.5" font-weight="300" fill="#71717a">
        좌측 메뉴 280px와 상단 영역 80px이 접히면서 업무 화면이 그만큼 커집니다.
      </text>
      <text x="22" y="74" font-size="11.5" font-weight="300" fill="#71717a">
        다시 F11을 누르면 원래대로 돌아옵니다. F10은 좌측 메뉴만 접습니다.
      </text>
    </g>
  </svg>
</template>
