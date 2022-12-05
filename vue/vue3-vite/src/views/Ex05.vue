<template>
  <div>
    <!-- 1. ref -->
    <p>{{ message1 }}</p>
    <button @click="reverseMessage1">Reverse Message by ref</button>

    <!-- 2. reactive -->
    <p>{{ message2.greeting }}</p>
    <button @click="reverseMessage2">Reverse Message by reactive</button>
  </div>
</template>

<script>
document.querySelector('title').innerText = 'Handling User Input, methods and Event (사용자 입력 다루기)';

import { ref, reactive } from 'vue';

export default {
  setup() {
    // 1. ref
    let message1 = ref('Hello Vue.js!');
    const reverseMessage1 = () => {
      message1.value = message1.value.split('').reverse().join('');
    };

    // 2. reactive
    let message2 = reactive({ greeting: 'Hello Vue.js!' });
    const reverseMessage2 = () => {
      message2.greeting = message2.greeting.split('').reverse().join('');
    };

    return { message1, reverseMessage1, message2, reverseMessage2 };
  },
};
</script>

<style></style>
