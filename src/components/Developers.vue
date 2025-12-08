<script setup>
// 사진이 준비되면 src="/photos/hwaryong.jpg" 등으로 변경하세요.
const DEVELOPERS = [
    { name: '신화룡', role: '개발', school: '대륜고등학교 교사', photoPlaceholder: 'Hwaryong', photoUrl: '/images/hwaryong.png' },
    { name: '홍대화', role: '개발 지원', school: '대륜고등학교 교사', photoPlaceholder: 'Daehwa', photoUrl: '/images/daehwa.png' },
];
</script>

<template>
  <!-- 배경을 bg-brand로 변경하고, 글씨색을 흰색으로 변경 -->
  <section class="py-20 bg-brand text-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-12">개발에 기여한 선생님들</h2>
      <div class="flex flex-col sm:flex-row justify-center gap-10">
        
        <div v-for="dev in DEVELOPERS" :key="dev.name" class="flex flex-col items-center max-w-xs">
          <!-- 사진 자리 (원형) -->
          <!-- 배경색을 bg-white로 변경하여 브랜드 컬러와 대비를 줍니다 -->
          <div class="w-28 h-28 mb-4 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center text-lg font-bold text-brand">
            <img :src="dev.photoUrl" :alt="dev.name" class="w-full h-full object-cover" />
          </div>
          
          <h3 class="text-xl font-bold">{{ dev.name }}</h3>
          <!-- text-brand 대신 text-white/90으로 변경 -->
          <p class="text-white/90 font-semibold mb-1">{{ dev.role }}</p>
          <!-- text-gray-600 대신 text-white/80으로 변경 -->
          <p class="text-white/80">{{ dev.school }}</p>
        </div>

      </div>
    </div>
  </section>
</template>