<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Developers from './components/Developers.vue'; // <-- 이 줄 추가
import GiscusComments from './components/GiscusComments.vue'; 
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Developers /> <!-- <-- 이 줄 추가 -->
      <GiscusComments /> 
    </main>
    <Footer />
  </div>
</template>