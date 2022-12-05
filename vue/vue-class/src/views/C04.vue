<!-- emits : 자식의 함수 -> 부모 -->
<template>
  <Child @giveMoney="receiveMoneyFromChild" />
  <div>받은 돈 : {{ myMoney }}</div>
</template>

<script setup>
import Child from './C04Child.vue';

import { ref } from 'vue';

const myMoney = ref(0);

const receiveMoneyFromChild = (childMoney) => {
  myMoney.value = childMoney.value;
};
</script>

<style></style>
