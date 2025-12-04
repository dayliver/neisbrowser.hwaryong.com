<script setup>
const RELEASE_URL = 'https://github.com/dayliver/neis-browser-release/releases';
</script>
<template>
  <section class="pt-32 pb-20 bg-[#f6f5f5] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      
      <!-- 왼쪽: 텍스트 -->
      <div class="text-left z-10">
        <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6">
          NEIS 업무,<br />
          <span class="text-brand">더 빠르고 똑똑하게.</span>
        </h1>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
          나이스브라우저는 선생님들의 반복적인 업무를 줄여드리는 전용 도구입니다. 
          메뉴 검색부터 엑셀 일괄 붙여넣기까지, 지금 바로 경험해보세요.
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
          <a :href="RELEASE_URL" target="_blank" class="bg-brand text-white px-8 py-4 rounded text-base font-bold hover:bg-brand-dark transition shadow-lg text-center">
            WINDOWS용 다운로드
          </a>
          <a href="#comments-section" class="bg-white text-brand border border-brand px-8 py-4 rounded text-base font-bold hover:bg-blue-50 transition shadow-sm text-center">
            사용 가이드 보기 (피드백)
          </a>
        </div>
        <p class="mt-4 text-sm text-gray-500">✅ 별도 가입 없음 · 평생 무료 업데이트</p>
      </div>

      <!-- 오른쪽: 이미지 (목업) -->
      <div class="relative z-10">
        <!-- 실제 브라우저 화면 -->
        <div class="rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-1 hover:rotate-0 transition duration-500 bg-white">
            <img src="/images/hero4.png" alt="나이스브라우저 실행화면" class="w-full h-auto block" />
        </div>
        <!-- 장식용 배경 원 -->
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10"></div>
      </div>

    </div>
  </section>
</template>