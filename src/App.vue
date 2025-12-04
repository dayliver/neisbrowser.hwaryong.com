<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Download from './components/Download.vue';
import GiscusComments from './components/GiscusComments.vue'; // <-- 이 줄 추가
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Download />
      <GiscusComments /> <!-- <-- 이 줄 추가 -->
    </main>
    <Footer />
  </div>
</template>