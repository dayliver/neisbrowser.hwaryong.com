<script setup></script>
<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div class="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
           <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="w-full h-full object-cover"
          >
            <source src="/videos/demo-search-small.mp4" type="video/mp4" />
            </video>
        </div>
        
        <div class="order-1 lg:order-2">
          <h2 class="text-3xl font-bold mb-4 text-gray-900">복잡한 메뉴, <br/>검색 한 번으로 이동하세요.</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            더 이상 수많은 메뉴 트리를 클릭하며 시간을 낭비하지 마세요. 
            '성적', '출결' 등 키워드만 입력하면 원하는 메뉴로 즉시 이동합니다.
            자주 쓰는 메뉴는 자동으로 우선 순위가 높아집니다.
          </p>
          <div class="flex items-center gap-2 text-brand font-bold">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>초성 검색 지원 (예: ㅅㅈ → 성적)</span>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-gray-900">엑셀 명렬표 그대로,<br/>붙여넣기만 하세요.</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            학생들의 특기사항, 엑셀에서 한 줄씩 복사하고 계신가요?
            나이스브라우저에서는 열 전체를 복사해서 붙여넣으면, 
            각 학생의 입력란에 알아서 나뉘어 들어갑니다.
          </p>
          <div class="flex items-center gap-2 text-brand font-bold">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>업무 시간 50% 단축 효과</span>
          </div>
        </div>

        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
           <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="w-full h-full object-cover"
          >
            <source src="/videos/demo-paste-small.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  </section>
</template>