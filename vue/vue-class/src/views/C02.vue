<!-- vue-router -->
<template>
  <h1>{{ route.name }}</h1>
  <p>
    <button type="button" @click="goHome">Home</button>
  </p>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<style></style>
