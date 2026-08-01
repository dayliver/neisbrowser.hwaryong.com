<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Developers from './components/Developers.vue';
import GiscusComments from './components/GiscusComments.vue';
import Footer from './components/Footer.vue';
import { useReveal } from './composables/useReveal';

useReveal();
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-ink antialiased">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Developers />
      <GiscusComments />
    </main>
    <Footer />
  </div>
</template>
