<!-- Handling User Input, v-model (사용자 입력 다루기) -->
<template>
  <p>{{ message }}</p>
  <input v-model="message" />
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue!');
</script>

<style></style>
