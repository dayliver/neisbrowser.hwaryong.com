<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Download from './components/Download.vue';
import GiscusComments from './components/GiscusComments.vue'; // <-- Giscus 컴포넌트
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Download />
      <!-- 댓글 영역이 메인 콘텐츠의 마지막에 확실하게 위치하도록 합니다 -->
      <GiscusComments /> 
    </main>
    <Footer />
  </div>
</template>