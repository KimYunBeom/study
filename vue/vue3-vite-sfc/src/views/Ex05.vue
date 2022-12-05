<!-- Handling User Input, methods and Event (사용자 입력 다루기) -->
<!-- ref vs reactive -->
<!-- ref      : function에서는 value로 값을 변경. primitive type에 반응 O. -->
<!-- reactive : 객체 형태로 선언, value 없이 직접 값을 변경. primitive type에 반응 X. -->
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

<script setup>
import { ref, reactive } from 'vue';

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
</script>

<style></style>
