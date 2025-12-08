<script setup></script>
<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- 기능 1: 메뉴 검색 -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div class="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
           <!-- 비디오 태그: 자동재생, 반복, 음소거 -->
           <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="w-full h-full object-cover"
          >
            <source src="/videos/demo-search.mp4" type="video/mp4" />
          </video>
        </div>
        
        <!-- 텍스트 영역 (오른쪽) -->
        <div class="order-1 lg:order-2">
          <h2 class="text-3xl font-bold mb-4 text-gray-900">복잡한 메뉴, <br/>검색 한 번으로 이동하세요.</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            더 이상 수많은 메뉴 트리를 클릭하며 시간을 낭비하지 마세요. 
            '성적', '출결' 등 키워드만 입력하면 원하는 메뉴로 즉시 이동합니다.
            자주 쓰는 메뉴는 자동으로 우선 순위가 높아집니다.
          </p>
          <div class="flex items-center gap-2 text-brand font-bold">
            <!-- 초성 검색 대신 '키워드 즉시 검색'으로 변경 -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>키워드 입력으로 원하는 메뉴 즉시 검색</span>
          </div>
        </div>
      </div>

      <!-- 기능 2: 일괄 붙여넣기 (좌우 반전) -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- 텍스트 영역 (왼쪽) -->
        <div>
          <h2 class="text-3xl font-bold mb-4 text-gray-900">엑셀 내용 그대로,<br/>붙여넣기만 하세요.</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            학생들의 특기사항 등을 엑셀에서 한 줄씩 복사하고 계신가요?
            나이스브라우저에서는 열 전체를 복사해서 붙여넣으면, 
            각 학생의 입력란에 알아서 나뉘어 들어갑니다.
          </p>
          <div class="flex items-center gap-2 text-brand font-bold">
            <!-- '업무 시간 50% 단축' 대신 '업무 시간 대폭 단축'으로 변경 -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>반복 업무 시간 대폭 단축 효과</span>
          </div>
        </div>

        <!-- 영상 영역 (오른쪽) -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
           <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="w-full h-full object-cover"
          >
            <source src="/videos/demo-paste.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  </section>
</template>