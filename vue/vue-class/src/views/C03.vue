<!-- props : 부모의 값 -> 자식 -->
<template>
  <Child />
  <Child :parentMoney="myMoney" />
</template>

<script setup>
import Child from './C03Child.vue';

import { ref } from 'vue';

const myMoney = ref(100);
</script>

<style></style>
