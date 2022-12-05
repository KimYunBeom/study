<!-- Compare v-model with ref to v-model without ref -->
<template>
  <p>
    <div>
      {{ greeting1 }}
    </div>
    <div>
      <input type="text" v-model="greeting1" />
    </div>
  </p>
  <p>
    <div>
      {{ greeting2 }}
    </div>
    <div>
      <input type="text" v-model="greeting2" />
    </div>
  </p>
</template>

<script setup>
import { ref } from 'vue';

const greeting1 = 'hello world';
const greeting2 = ref('hello world');
</script>

<style></style>
