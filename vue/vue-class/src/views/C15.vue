<!-- .env -->
<template>
  <div>{{ url }}</div>
  <div>{{ key }}</div>
</template>

<script setup>
const env = import.meta.env;
const url = import.meta.env.VITE_URL;
const key = import.meta.env.VITE_KEY;

console.log(env);
console.log(url);
console.log(key);
</script>

<style scoped></style>
