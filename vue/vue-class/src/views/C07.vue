<!-- Lifecycle Hooks -->
<template>
  <div>
    <span>{{ num }}</span>
    <span>&nbsp;</span>
    <button type="button" @click="addNum">Add Number</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted } from 'vue';

const num = ref(1);
const addNum = () => {
  num.value++;
};

onBeforeMount(() => {
  console.log('onBeforeMount', 'num.value :', num.value);
});

onMounted(() => {
  console.log('onMounted', 'num.value :', num.value);
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate', 'num.value :', num.value);
  if (num.value > 2) {
    num.value = 0;
  }
});

onUpdated(() => {
  console.log('onUpdated', 'num.value :', num.value);
});

onUnmounted(() => {
  console.log('onUnmounted', 'num.value :', num.value);
});
</script>

<style></style>
