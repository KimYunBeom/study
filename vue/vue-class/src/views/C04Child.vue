<template>
  <div>
    <span>부모님께 드릴 용돈 : </span>
    <span>{{ myMoney }}</span>
    <span>&nbsp;</span>
    <button type="button" @click="giveMoneyForParent">Give it!</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let myMoney = ref(200);

const emits = defineEmits(['giveMoney']);
const giveMoneyForParent = () => {
  emits('giveMoney', myMoney);
};
</script>

<style></style>
