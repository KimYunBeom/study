<template>
  <div>
    <span>부모님이 주신 용돈 : </span>
    <span>{{ parentMoney }}</span>
  </div>
</template>

<script setup>
defineProps({
  parentMoney: {
    Type: Number,
    default: 0,
  },
});
</script>

<style></style>
