<template>
  <p>{{ message }}</p>
  <input v-model="message" />
</template>

<script>
document.querySelector('title').innerText = 'Handling User Input, v-model (사용자 입력 다루기)';

import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue!');

    return { message };
  },
};
</script>

<style></style>
