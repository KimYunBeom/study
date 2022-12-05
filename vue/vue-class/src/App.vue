<template>
  <Header />
  <hr />
  <router-view />
  <hr />
  <Footer />
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
