<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />
    <hr />
    <router-view />
    <hr />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
ol {
  display: flex;
  flex-direction: column;
}
</style>
